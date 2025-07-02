import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Terminal as TerminalIcon, Minimize2, Maximize2, X } from 'lucide-react';
import { TERMINAL_COMMANDS } from '../../data/constants';

interface TerminalLine {
  type: 'command' | 'output';
  content: string;
  timestamp: Date;
}

export const Terminal: React.FC = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [currentInput, setCurrentInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      type: 'output',
      content: `Welcome to CloudShell Terminal v2.0
DevOps Engineer & Cloud Architect Portfolio
Type 'help' to see available commands`,
      timestamp: new Date(),
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (command: string) => {
    const trimmedCommand = command.trim().toLowerCase();
    
    // Add command to history
    setHistory(prev => [...prev, {
      type: 'command',
      content: `$ ${command}`,
      timestamp: new Date(),
    }]);

    // Handle special commands
    if (trimmedCommand === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmedCommand === 'hire-me') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }

    // Execute command
    const cmd = TERMINAL_COMMANDS[trimmedCommand];
    let output = '';

    if (cmd) {
      output = typeof cmd.output === 'function' ? cmd.output() : cmd.output;
    } else if (trimmedCommand) {
      output = `Command not found: ${trimmedCommand}\nType 'help' to see available commands`;
    }

    if (output) {
      setHistory(prev => [...prev, {
        type: 'output',
        content: output,
        timestamp: new Date(),
      }]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim()) {
      executeCommand(currentInput);
      setCommandHistory(prev => [...prev, currentInput]);
      setHistoryIndex(-1);
      setCurrentInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <section id="terminal" className="py-20 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0d]/50 to-[#0d0d0d]" />
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            CloudShell Terminal
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Interactive terminal simulator with real DevOps commands. Try typing 'help' to get started.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`mx-auto bg-dark-900 border border-dark-700 rounded-lg overflow-hidden shadow-2xl ${
            isMaximized ? 'fixed inset-4 z-50' : 'max-w-4xl'
          }`}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-dark-800 border-b border-dark-700">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <TerminalIcon size={16} />
                <span className="text-sm font-mono">~/devops-portfolio</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="p-1 text-gray-400 hover:text-white transition-colors"
              >
                {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              </button>
            </div>
          </div>

          {/* Terminal Content */}
          <div 
            ref={terminalRef}
            className={`bg-dark-950 p-4 font-mono text-sm overflow-y-auto ${
              isMaximized ? 'h-[calc(100vh-200px)]' : 'h-96'
            }`}
          >
            {history.map((line, index) => (
              <div key={index} className="mb-2">
                {line.type === 'command' ? (
                  <div className="flex items-center gap-2">
                    <span className="text-primary-400">$</span>
                    <span className="text-green-400">{line.content.slice(2)}</span>
                  </div>
                ) : (
                  <pre className="text-gray-200 whitespace-pre-wrap">{line.content}</pre>
                )}
              </div>
            ))}
            
            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-primary-400">$</span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-green-400 outline-none"
                placeholder="Type a command..."
                autoFocus
              />
              <span className="text-white animate-pulse">|</span>
            </form>
          </div>
        </motion.div>

        {/* Terminal Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-4xl mx-auto"
        >
          <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Commands</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              {Object.entries(TERMINAL_COMMANDS).slice(0, 6).map(([cmd, data]) => (
                <div key={cmd} className="flex items-center gap-3">
                  <code className="text-primary-400 font-mono">{cmd}</code>
                  <span className="text-gray-400">-</span>
                  <span className="text-gray-300">{data.description}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};