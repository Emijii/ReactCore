/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/

--RunSeedData is a SQLCMD Variable and can be found by looking at the project properties under the [SQLCMD Variables] tab.
--RunSeedData = TRUE means that when we deploy the database, we execute the SQL statements that are contained in the SeedData.sql file.
--The reason this is a nice to have is because we can deploy a fresh copy of the database with fresh seed data whenever we want.
--It makes it really easy to start fresh after making lots of data changes.
--The application will also always have test data, which makes it nice when trying to style or design the UI.
IF (N'$(RunSeedData)' = 'TRUE')    
  BEGIN
    PRINT 'Populating database with seed data'
	:r ./PostDeployment/SeedData.sql
  END