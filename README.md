#API NESTJS

### generate migration files
npm run typeorm:generate-migration --name={name}

### generate migration files empty, user can be customized code
npm run typeorm:create-migration --name={name}

### run script sql have been generated from cli "npm run typeorm:generate-migration --name={name}"
npm run typeorm:run-migration

### revert script sql have been generated from cli "npm run typeorm:generate-migration --name={name}"
npm run typeorm:revert-migration