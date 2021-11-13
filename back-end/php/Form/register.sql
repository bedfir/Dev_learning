
-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : jeu. 25 fév. 2021 à 16:14
-- Version du serveur :  5.6.51
-- Version de PHP : 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `voitures`
--
CREATE DATABASE IF NOT EXISTS `form` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `form`;

-- --------------------------------------------------------

--
-- Structure de la table `voitures`
--

CREATE TABLE `register` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fullName` VARCHAR(69) NOT NULL UNIQUE,
  `email` VARCHAR(120) NOT NULL UNIQUE,
  `position` VARCHAR(10) NOT NULL,
  `pwd` VARCHAR(100) NOT NULL,
  `gender` VARCHAR(10),
    PRIMARY KEY (id)
) ENGINE=InnoDB;

--
-- Déchargement des données de la table `voitures`
--
/* 
INSERT INTO `register` (`id`, `immatriculation`, `proprietaire`) VALUES
(1, 'DC-456-YH', 'Rémi'),
(2, 'AC-123-ZH', 'Corine'),
(3, 'AA-323-KH', 'Yonie');
 */