CREATE PROCEDURE [dbo].[GetReasons]
AS
BEGIN
	SELECT
		Reason
	FROM
		reactcore.Reasons
END
