# Bitraf door opener

![](screenshots/start.png)

## Development setup

### First time
```
sudo apt install gnome-keyring
npx fitbit-build
```

### Every time

Start fitbit shell:
```shell
npx fitbit
```

Build and install app
```shell
fitbit$ bi
```

## Deployment
1. Build app using the instructions above
2. Log in to - https://gam.fitbit.com
3. Create app and upload `build/app.fba`


## Resources
- https://studio.fitbit.com
- https://dev.fitbit.com/build/guides/command-line-interface/
