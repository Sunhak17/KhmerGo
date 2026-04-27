-- KhmerGo MySQL schema
-- Requires MySQL 8+

CREATE DATABASE IF NOT EXISTS khmergo_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE khmergo_db;

-- App users for login/signup and booking ownership
CREATE TABLE IF NOT EXISTS users (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(190) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  phone VARCHAR(30) NULL,
  role ENUM('user', 'admin') NOT NULL DEFAULT 'user',
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_users_email (email)
) ENGINE=InnoDB;

-- Province catalog aligned with frontend province IDs
CREATE TABLE IF NOT EXISTS provinces (
  id INT UNSIGNED NOT NULL,
  name VARCHAR(120) NOT NULL,
  slug VARCHAR(140) NOT NULL,
  province_type VARCHAR(80) NOT NULL,
  description TEXT NULL,
  image_url VARCHAR(255) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_provinces_name (name),
  UNIQUE KEY uq_provinces_slug (slug)
) ENGINE=InnoDB;

-- Tourist places by province
CREATE TABLE IF NOT EXISTS places (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  province_id INT UNSIGNED NOT NULL,
  name VARCHAR(160) NOT NULL,
  slug VARCHAR(180) NOT NULL,
  tag VARCHAR(80) NULL,
  best_for VARCHAR(120) NULL,
  detail TEXT NULL,
  image_url VARCHAR(255) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_places_province_slug (province_id, slug),
  KEY idx_places_province (province_id),
  CONSTRAINT fk_places_province
    FOREIGN KEY (province_id) REFERENCES provinces(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
) ENGINE=InnoDB;

-- Accommodation services (hotel and homestay)
CREATE TABLE IF NOT EXISTS stays (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  province_id INT UNSIGNED NOT NULL,
  name VARCHAR(180) NOT NULL,
  slug VARCHAR(200) NOT NULL,
  stay_type ENUM('Hotel', 'Homestay') NOT NULL,
  best_for VARCHAR(120) NULL,
  detail TEXT NULL,
  price_min DECIMAL(10,2) NULL,
  price_max DECIMAL(10,2) NULL,
  currency_code CHAR(3) NOT NULL DEFAULT 'USD',
  image_url VARCHAR(255) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_stays_province_slug (province_id, slug),
  KEY idx_stays_province (province_id),
  KEY idx_stays_type (stay_type),
  CONSTRAINT fk_stays_province
    FOREIGN KEY (province_id) REFERENCES provinces(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  CONSTRAINT chk_stays_price_range
    CHECK (price_max IS NULL OR price_min IS NULL OR price_max >= price_min)
) ENGINE=InnoDB;

-- Booking records for stays
CREATE TABLE IF NOT EXISTS bookings (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NULL,
  stay_id BIGINT UNSIGNED NOT NULL,
  guest_name VARCHAR(120) NOT NULL,
  guest_email VARCHAR(190) NOT NULL,
  guest_phone VARCHAR(30) NULL,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  adults SMALLINT UNSIGNED NOT NULL DEFAULT 1,
  children SMALLINT UNSIGNED NOT NULL DEFAULT 0,
  rooms SMALLINT UNSIGNED NOT NULL DEFAULT 1,
  total_price DECIMAL(10,2) NULL,
  status ENUM('pending', 'confirmed', 'cancelled', 'completed') NOT NULL DEFAULT 'pending',
  note TEXT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_bookings_user (user_id),
  KEY idx_bookings_stay (stay_id),
  KEY idx_bookings_dates (check_in, check_out),
  CONSTRAINT fk_bookings_user
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE
    ON DELETE SET NULL,
  CONSTRAINT fk_bookings_stay
    FOREIGN KEY (stay_id) REFERENCES stays(id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT,
  CONSTRAINT chk_bookings_dates
    CHECK (check_out > check_in)
) ENGINE=InnoDB;

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_messages (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(190) NOT NULL,
  subject VARCHAR(180) NULL,
  message TEXT NOT NULL,
  status ENUM('new', 'in_progress', 'closed') NOT NULL DEFAULT 'new',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_contact_status (status),
  KEY idx_contact_created_at (created_at)
) ENGINE=InnoDB;

-- Optional helper indexes for frequent lookups
CREATE INDEX idx_places_name ON places(name);
CREATE INDEX idx_stays_name ON stays(name);
