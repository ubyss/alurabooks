import { useQuery } from "@apollo/client";
import { OBTER_DESTAQUES } from "./queries";
import { destaquesVar } from "./state";

export const useDestaques = () => {
  return useQuery<any>(OBTER_DESTAQUES, {
    onCompleted(data) {
      if (data) {
        console.log(data);
        destaquesVar(data.destaques);
      }
    },
  });
};
