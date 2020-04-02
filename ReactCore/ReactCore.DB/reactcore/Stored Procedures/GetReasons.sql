-- =============================================
-- Author:		Emijii
-- Create date: 4/2/2020
-- Description:	Returns reason data
-- =============================================
CREATE PROCEDURE [dbo].[GetReasons]
AS
BEGIN
	SELECT
		Reason
	FROM
		reactcore.Reasons
END