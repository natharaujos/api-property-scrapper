import { collection, doc, setDoc, getDocs, query } from "@firebase/firestore";
import { Realty } from "../../../../application/domain/models/Realty";
import { firebaseDb } from "../../../firebaseConfig";
import { IRealtyDbAdapter } from "../../../../application/domain/adapters/IRealtyDbAdapter";
import { RealtyReturn } from "./entities/RealtyReturn";

export class RealtyDbAdapter implements IRealtyDbAdapter {
  async createRealty(realty: Realty) {
    const realtiesRef = collection(firebaseDb, "property-collection");
    try {
      await setDoc(doc(realtiesRef, `${realty.name}`), {
        name: realty.name,
        link: realty.link,
      });
    } catch {
      throw new Error("Erro ao adicionar imobiliária.");
    }
  }

  async getRealties(): Promise<RealtyReturn[]> {
    const realtiesRef = query(collection(firebaseDb, "property-collection"));
    try {
      const docSnap = await getDocs(realtiesRef);
      return docSnap.docs.map((doc) => {
        const realtyReturn: RealtyReturn = {
          name: doc.data().name,
          link: doc.data().link,
        };

        return realtyReturn;
      });
    } catch (error: any) {
      throw new Error(
        "Erro ao realizar consultado na coleção de imobiliárias."
      );
    }
  }
}
