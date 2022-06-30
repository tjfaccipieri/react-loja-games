import Categoria from "./Categoria";
import Usuario from "./Usuario";

interface Produto {
  id: number;
  nome: string;
  preco: number;
  publisher: string;
  quantidade?: number;
  tipo: string;
  foto: string;
  estilo: string;
  descricao: string;
  dataLancamento: string;
  curtidos: number;
  categoria: Categoria | null;
  usuario: Usuario | null;
}

export default Produto