<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230826084018 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE feuil1 (id INT AUTO_INCREMENT NOT NULL, nom_du_groupe VARCHAR(255) DEFAULT NULL, origine VARCHAR(255) DEFAULT NULL, ville VARCHAR(255) DEFAULT NULL, annee_debut VARCHAR(255) DEFAULT NULL, annee_separation VARCHAR(255) DEFAULT NULL, fondateurs VARCHAR(255) DEFAULT NULL, membres VARCHAR(255) DEFAULT NULL, courant_musical VARCHAR(255) DEFAULT NULL, presentation VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE feuil1');
    }
}
