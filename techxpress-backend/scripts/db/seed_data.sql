   CREATE TABLE Products (
       Id INT PRIMARY KEY IDENTITY(1,1),
       Name NVARCHAR(100) NOT NULL,
       Description NVARCHAR(MAX),
       Price DECIMAL(18, 2) NOT NULL,
       ImageUrl NVARCHAR(255),
       CreatedAt DATETIME DEFAULT GETDATE()
   );