export const outputFn = (opts = { cjs: true, esm: true, umd: false }) => {
    return () => {
        const output= []
        opts.esm && output.push({
            file: 'dist/index.esm.js',
            format: 'esm',
            sourceMap: true
        })
        opts.cjs && output.push({
            file: 'dist/index.cjs',
            format: 'cjs',
            sourceMap: true 
        }),
        opts.umd && output.push({
            file: 'dist/index.umd.js',
            format: 'umd',
            sourceMap: true 
        })

        return output
    }
    
}