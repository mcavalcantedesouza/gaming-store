import { Produto } from "src/produto/entities/produto.entities";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_categorias"})
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: 'varchar', length: 1000, nullable: false})
    tipo: string

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[]
    
}