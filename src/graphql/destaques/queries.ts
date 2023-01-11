import { gql } from "@apollo/client";

export const OBTER_DESTAQUES = gql`
  query ObterDestaques {
    destaques {
      lancamentos {
        id
        titulo
        imagemCapa
        opcoesCompra {
          preco
        }
      }
      maisVendidos {
        id
        titulo
        imagemCapa
        opcoesCompra {
          preco
        }
      }
    }
  }
`;
