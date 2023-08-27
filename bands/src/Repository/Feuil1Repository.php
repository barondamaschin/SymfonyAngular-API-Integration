<?php

namespace App\Repository;

use App\Entity\Feuil1;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Feuil1>
 *
 * @method Feuil1|null find($id, $lockMode = null, $lockVersion = null)
 * @method Feuil1|null findOneBy(array $criteria, array $orderBy = null)
 * @method Feuil1[]    findAll()
 * @method Feuil1[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */

class Feuil1Repository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Feuil1::class);
    }

//    /**
//     * @return Feuil1[] Returns an array of Feuil1 objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('f.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Feuil1
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
