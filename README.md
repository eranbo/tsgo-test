sample project for testing tsgo  
when running pn run build from the workspace root folder the old tsc compiler is running - successfully  
when running tsgo from the workspace root folder the new go compiler is running - nothing happen  
when running with the flaf -listFiles this is the output:  

```
$ tsgo -listFiles
C:/Users/eran/dev/typescript-go/built/local/lib.es5.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2015.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2016.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2017.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2018.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2019.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2020.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2021.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2022.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2023.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.dom.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.dom.iterable.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.dom.asynciterable.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.webworker.importscripts.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.scripthost.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2015.core.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2015.collection.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2015.generator.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2015.iterable.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2015.promise.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2015.proxy.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2015.reflect.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2015.symbol.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2015.symbol.wellknown.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2016.array.include.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2016.intl.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2017.arraybuffer.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2017.date.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2017.object.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2017.sharedmemory.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2017.string.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2017.intl.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2017.typedarrays.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2018.asyncgenerator.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2018.asynciterable.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2018.intl.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2018.promise.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2018.regexp.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2019.array.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2019.object.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2019.string.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2019.symbol.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2019.intl.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2020.bigint.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2020.date.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2020.promise.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2020.sharedmemory.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2020.string.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2020.symbol.wellknown.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2020.intl.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2020.number.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2021.promise.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2021.string.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2021.weakref.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2021.intl.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2022.array.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2022.error.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2022.intl.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2022.object.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2022.string.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2022.regexp.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2023.array.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2023.collection.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2023.intl.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.decorators.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.decorators.legacy.d.ts
C:/Users/eran/dev/typescript-go/built/local/lib.es2023.full.d.ts
Files:              67
Lines:           40642
Identifiers:     44727
Symbols:         30477
Types:             340
Instantiations:      0
Memory used:    22067K
Memory allocs:   61876
Parse time:     0.019s
Bind time:      0.006s
Check time:     0.001s
Total time:     0.026s
```
