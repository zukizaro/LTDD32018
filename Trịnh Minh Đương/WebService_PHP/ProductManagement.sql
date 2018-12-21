-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2018 at 03:37 AM
-- Server version: 5.5.32
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `LTDD3Ws`
--
CREATE DATABASE IF NOT EXISTS `LTDD3Ws` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `LTDD3Ws`;

-- --------------------------------------------------------

--
-- Table structure for table `Product`
--

CREATE TABLE IF NOT EXISTS `Product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(500) NOT NULL,
  `name` varchar(5000) NOT NULL,
  `quantity` int(255) NOT NULL,
  `image` varchar(5000) NOT NULL DEFAULT 'https://facebook.github.io/react/logo-og.png',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `Product`
--

INSERT INTO `Product` (`ID`, `Code`, `Name`, `Quantity`, `Image`) VALUES
(3, 'sp001', 'ao', 10, 'https://facebook.github.io/react/logo-og.png'),
(5, 'sp001', 'quan', 20, 'https://facebook.github.io/react/logo-og.png'),
(6, 'sp100', 'ao them', 10, 'https://facebook.github.io/react/logo-og.png'),
(7, 'sp100', 'ao them', 10, 'https://facebook.github.io/react/logo-og.png'),
(8, 'sp001', 'quan tay', 200, 'http://img.f8.bdpcdn.net/Assets/Media/2018/10/30/31/aff-suzuki-cup.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
