import { ICategoria } from "../../interfaces/ICategoria";
import CardLivro from "../CardLivro";

import "./ListaLivros.css";
import { AbBotao, AbCampoTexto } from "ds-alurabooks";
import { useEffect, useState } from "react";
import { useLivros } from "../../graphql/livros/hooks";
import { useReactiveVar } from "@apollo/client";
import { filtroLivrosVar, livrosVar } from "../../graphql/livros/state";

interface ListaLivrosProps {
  categoria: ICategoria;
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
  const [textoBuscar, setTextoDaBusca] = useState("");

  useEffect(() => {
    filtroLivrosVar({
      ...filtroLivrosVar(),
      titulo: textoBuscar.length >= 3 ? textoBuscar : "",
    });
  }, [textoBuscar]);

  filtroLivrosVar({
    ...filtroLivrosVar(),
    categoria,
  });

  const livros = useReactiveVar(livrosVar);

  useLivros();

  return (
    <section>
      <form style={{ maxWidth: "80%", margin: "0 auto", textAlign: "center" }}>
        <AbCampoTexto
          value={textoBuscar}
          onChange={setTextoDaBusca}
          placeholder="Digite o título"
        />
        <div style={{ marginTop: "1rem" }}>
          <AbBotao texto="Buscar" />
        </div>
      </form>
      <div className="livros">
        {livros.map((livro) => (
          <CardLivro livro={livro} key={livro.id} />
        ))}
      </div>
    </section>
  );
};

export default ListaLivros;
