export const outputFn = (opts = { cjs: true, esm: true, umd: false }) => {
    return () => {
        const output= []
        opts.esm && output.push({
            file: 'dist/index.esm.js',
            format: 'esm'
        })
        opts.cjs && output.push({
            file: 'dist/index.js',
            format: 'cjs'
        }),
        opts.umd && output.push({
            file: 'dist/index.umd.js',
            format: 'umd'
        })

        return output
    }
    
}