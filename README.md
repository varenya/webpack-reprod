## Step to reproduce

- Do a yarn install in both the `root` and `sample-package`
- `yarn build` and `yarn link` the `sample-package` to the `root-app`
- Start the dev server in `root-app` by running `yarn start`
- You will not see anything on the screen
- Remove the `splitChunks` optimization in `sample-package` 
- Do a `yarn build` after removing the `splitChunks` config
- Start up the server in `root-app` - you will see the blue color text (module works)