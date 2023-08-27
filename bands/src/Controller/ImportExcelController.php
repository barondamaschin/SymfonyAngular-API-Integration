<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use PhpOffice\PhpSpreadsheet\IOFactory;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Feuil1;

class ImportExcelController extends AbstractController
{
    #[Route('/import/excel', name: 'app_import_excel')]
    public function index(EntityManagerInterface $em): Response
    {

        $inputFileName = $this->getParameter('spreadsheet_directory') . DIRECTORY_SEPARATOR . 'test.xlsx';
        $this->addFlash('notice', 'Loading file ' . pathinfo($inputFileName, PATHINFO_BASENAME) . ' using IOFactory to identify the format');

        $spreadsheet = IOFactory::load($inputFileName);

        $sheetData = $spreadsheet->getActiveSheet()->toArray(null, true, true, true);

        $header = array_shift($sheetData); 

        foreach ($sheetData as $row) {

            $existingEntry = $em->getRepository(Feuil1::class)->findOneBy(['NomDuGroupe' => $row['A']]);

            if ($existingEntry) {
                // Entry already exists, skip this iteration


        
                continue;
                echo 'Ati efectuat deja importul!';
            } else {

                $entry = new Feuil1();

                $entry->setNomDuGroupe($row['A']);
                $entry->setOrigine($row['B']);
                $entry->setVille($row['C']);
                $entry->setAnneeDebut($row['D']);
                $entry->setAnneeSeparation($row['E']);
                $entry->setFondateurs($row['F']);
                $entry->setMembres($row['G']);
                $entry->setCourantMusical($row['H']);
                $entry->setPresentation($row['I']);
    
                $em->persist($entry);

            }



        }

        $em->flush();

        // After importing and flushing the data...
$em->flush();

           return $this->render('index.html.twig', [
            'header' => $header,
            'sheetData' => $sheetData
            
        ]);

       
    }
}
