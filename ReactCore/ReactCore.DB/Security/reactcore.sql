--This is the schema we will use for the ReactCore tables.
--Creating a custom schema allows us to set security authorization settings by user.
--So in this example, the [reactcore] schema's authorization is assigned to the ReactCore user.
CREATE SCHEMA [reactcore] AUTHORIZATION [ReactCore]