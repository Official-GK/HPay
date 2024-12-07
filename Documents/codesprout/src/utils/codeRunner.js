const executeCode = async (code, language = 'javascript') => {
  try {
    let result;
    const context = {
      output: [],
      console: {
        log: (...args) => context.output.push(args.join(' ')),
        error: (...args) => context.output.push(`Error: ${args.join(' ')}`),
        warn: (...args) => context.output.push(`Warning: ${args.join(' ')}`)
      }
    };

    switch (language.toLowerCase()) {
      case 'javascript': {
        // Execute code directly with console capture
        const fn = new Function('console', `
          try {
            ${code}
          } catch (e) {
            console.error(e.message);
          }
        `);
        
        fn.call({}, context.console);
        result = context.output.join('\n');
        break;
      }

      case 'python': {
        // TODO: Add Python execution
        throw new Error('Python execution not yet implemented');
      }

      case 'java': {
        // TODO: Add Java execution
        throw new Error('Java execution not yet implemented');
      }

      default:
        throw new Error(`Unsupported language: ${language}`);
    }

    return {
      success: true,
      output: result,
      language
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      language
    };
  }
};

export default executeCode;