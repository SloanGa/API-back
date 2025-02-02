import { justifyText } from "../utils/justifyText";

describe("justifyText", () => {
  it("should justify the first text", () => {
    const input =
      "Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite que je n’avais pas le temps de me dire: «Je m’endors.» Et, une demi-heure après, la pensée qu’il était temps de chercher le sommeil m’éveillait; je voulais poser le volume que je croyais avoir dans les mains et souffler ma lumière; je n’avais pas cessé en dormant de faire des réflexions sur ce que je venais de lire, mais ces réflexions avaient pris un tour un peu particulier; il me semblait que j’étais moi-même ce dont parlait l’ouvrage: une église, un quatuor, la rivalité de François Ier et de Charles-Quint.";

    const result = justifyText(input);

    // Each line must be 80 characters long, excluding the last line.
    const lines = result.split("\n");
    lines.forEach((line, index) => {
      if (index === lines.length - 1) {
        expect(line.length).toBeLessThanOrEqual(80);
      } else {
        expect(line.length).toBe(80);
      }
    });
  });

  it("should justify the second text", () => {
    const input =
      "Cette croyance survivait pendant quelques secondes à mon réveil; elle ne choquait pas ma raison, mais pesait comme des écailles sur mes yeux et les empêchait de se rendre compte que le bougeoir n’était plus allumé. Puis elle commençait à me devenir inintelligible, comme après la métempsycose les pensées d’une existence antérieure; le sujet du livre se détachait de moi, j’étais libre de m’y appliquer ou non; aussitôt je recouvrais la vue et j’étais bien étonné de trouver autour de moi une obscurité, douce et reposante pour mes yeux, mais peut-être plus encore pour mon esprit, à qui elle apparaissait comme une chose sans cause, incompréhensible, comme une chose vraiment obscure. Je me demandais quelle heure il pouvait être; j’entendais le sifflement des trains qui, plus ou moins éloigné, comme le chant d’un oiseau dans une forêt, relevant les distances, me décrivait l’étendue de la campagne déserte où le voyageur se hâte vers la station prochaine; et le petit chemin qu’il suit va être gravé dans son souvenir par l’excitation qu’il doit à des lieux nouveaux, à des actes inaccoutumés, à la causerie récente et aux adieux sous la lampe étrangère qui le suivent encore dans le silence de la nuit, à la douceur prochaine du retour.";

    const result = justifyText(input);

    // Each line must be 80 characters long, excluding the last line.
    const lines = result.split("\n");
    lines.forEach((line, index) => {
      if (index === lines.length - 1) {
        expect(line.length).toBeLessThanOrEqual(80);
      } else {
        expect(line.length).toBe(80);
      }
    });
  });

  it("should return a empty string", () => {
    const input = " ";
    const expectedOutput = " ";

    const result = justifyText(input);
    expect(result).toBe(expectedOutput);
  });
});
