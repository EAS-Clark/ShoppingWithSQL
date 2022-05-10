DROP TABLE IF EXISTS items;
CREATE TABLE items (
  id         INT AUTO_INCREMENT NOT NULL,
  name      VARCHAR(256) NOT NULL,
  category_id     int NOT NULL,    
  price         INT(50) NOT NULL,
  image_url     VARCHAR(256) NOT NULL,

  PRIMARY KEY (`id`),
  FOREIGN KEY (category_id) REFERENCES categories(`id`)
  
);

INSERT INTO items 
  (name, category_id, price, image_url) 
VALUES
  ('bread', 1 , 3.56, '/data/bread.png'),
  ('milk', 1 , 1.56, '/data/milk.png');