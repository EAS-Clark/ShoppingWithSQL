DROP TABLE IF EXISTS categories;
CREATE TABLE categories (
  id         INT AUTO_INCREMENT NOT NULL,
  name      VARCHAR(256) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO categories 
  (name) 
VALUES
  ('Food'),
  ('Drink');
