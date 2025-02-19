module.exports = {
    apps: [
        {
            name: "react-router-pm2-example",
            script: "npx",
            args: "react-router-serve build/server/index.js",
            watch: true,
            exec_mode: "cluster",
            instances: 2,
            increment_var: "PORT",
            env: {
                PORT: 3000,
            },
        }
    ]
}
