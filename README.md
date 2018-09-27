### How to run:
```
cd projectB
npm link
cd ../projectA
npm link projectb
node index.js
```

Actual result:
```
npmLink
undefined
```

Expected result:
```
npmLink
npmLink
```