# ed-i18n-bug
### Verify canary release
- [x] I verified that the issue exists in the latest Next.js canary release

### Provide environment information
```
"next": "12.2.5", // Also tested on 12.2.6-canary.7 and 12.1.6
"next-i18next": "12.0.0", // Also tested on 10.5.0
"react": "18.2.0", // Also tested on 17.0.2
"react-dom": "18.2.0" // Also tested on 17.0.2
```
 
### How are you deploying your application?
Vercel

### Bug Description

#### Context
We encountered a bug around next-i18next that resulted in serverless crashes for catch-all routes. We noticed this bug for the first time Monday around 14:00 CET and think it is potentially related with a change in the serverless runtime/filestructure as older deployments that used to work stoped working when redeploying.

Some other people also seemed to have encountered the same bug. See also here:
- [This discod thread](https://discord.com/channels/752553802359505017/1013900674871873627)
- [This next-i18next bug report](https://github.com/i18next/next-i18next/issues/1935)
- [Stackoverflow same problem](https://stackoverflow.com/questions/73539195/you-will-need-to-pass-in-an-i18next-instance-by-using-initreacti18next-vercel-de)

#### What we tried
So we upgraded our versions of next and next-i18next (like some of the other people did).
With the most recent next.js and next-i18next versions translations seem to work only in very specific cases.

We created a minimal replicable deployment ([Repo](https://github.com/everdropde/ed-i18n-bug)) where we prebuild two pages via putting them in `getStaticPaths`:
- https://ed-i18n-bug.vercel.app/en/test/prebuild
- https://ed-i18n-bug.vercel.app/de/test/prebuild

Both pages do not use translations when opening them directly.

However, when first navigating to the [index.js](https://ed-i18n-bug.vercel.app/) and then clicking on of the links the two pages use proper translation. 

**Note:** The translations will break upon refresh.

### Setup Description
- catch all route in pages folder
- page set to static site generation
- default locale is set
- incremental static regeneration is on

### Expected Behavior
working Translations

### Links to Reproduce
Example repo here: https://github.com/everdropde/ed-i18n-bug
Example Vercel Deployment: https://ed-i18n-bug.vercel.app/de

### Steps To Reproduce
1. Clone the Repo and deploy it to Vercel
2. Click any link on page
