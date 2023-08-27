<?php

namespace App\Entity;

use App\Repository\Feuil1Repository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;



#[ORM\Entity(repositoryClass: Feuil1Repository::class)]


#[ApiResource]

class Feuil1
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $NomDuGroupe = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Origine = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Ville = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $AnneeDebut = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $AnneeSeparation = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Fondateurs = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Membres = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $CourantMusical = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Presentation = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomDuGroupe(): ?string
    {
        return $this->NomDuGroupe;
    }

    public function setNomDuGroupe(?string $NomDuGroupe): static
    {
        $this->NomDuGroupe = $NomDuGroupe;

        return $this;
    }

    public function getOrigine(): ?string
    {
        return $this->Origine;
    }

    public function setOrigine(?string $Origine): static
    {
        $this->Origine = $Origine;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->Ville;
    }

    public function setVille(?string $Ville): static
    {
        $this->Ville = $Ville;

        return $this;
    }

    public function getAnneeDebut(): ?string
    {
        return $this->AnneeDebut;
    }

    public function setAnneeDebut(?string $AnneeDebut): static
    {
        $this->AnneeDebut = $AnneeDebut;

        return $this;
    }

    public function getAnneeSeparation(): ?string
    {
        return $this->AnneeSeparation;
    }

    public function setAnneeSeparation(?string $AnneeSeparation): static
    {
        $this->AnneeSeparation = $AnneeSeparation;

        return $this;
    }

    public function getFondateurs(): ?string
    {
        return $this->Fondateurs;
    }

    public function setFondateurs(?string $Fondateurs): static
    {
        $this->Fondateurs = $Fondateurs;

        return $this;
    }

    public function getMembres(): ?string
    {
        return $this->Membres;
    }

    public function setMembres(?string $Membres): static
    {
        $this->Membres = $Membres;

        return $this;
    }

    public function getCourantMusical(): ?string
    {
        return $this->CourantMusical;
    }

    public function setCourantMusical(?string $CourantMusical): static
    {
        $this->CourantMusical = $CourantMusical;

        return $this;
    }

    public function getPresentation(): ?string
    {
        return $this->Presentation;
    }

    public function setPresentation(?string $Presentation): static
    {
        $this->Presentation = $Presentation;

        return $this;
    }
}
