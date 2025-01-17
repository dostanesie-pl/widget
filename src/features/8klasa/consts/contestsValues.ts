import { Contest } from "@/features/8klasa/types/calculator";

// https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001737/O/D20191737.pdf
// https://sip.lex.pl/akty-prawne/dzu-dziennik-ustaw/szczegolne-rozwiazania-w-okresie-czasowego-ograniczenia-18972569/par-11-bab

export const contestsValues: Contest[] = [
  {
    name: `Uzyskanie w zawodach wiedzy będących konkursem o zasięgu ponadwojewódzkim organizowanym przez
             kuratorów oświaty na podstawie zawartych porozumień:`,
    selectedFieldIndex: 0,
    fields: [
      { name: "brak", value: "0" },
      { name: "tytułu finalisty konkursu przedmiotowego", value: "10" },
      {
        name: "tytułu laureata konkursu tematycznego lub interdyscyplinarnego",
        value: "7",
      },
      {
        name: "tytułu finalisty konkursu tematycznego lub interdyscyplinarnego",
        value: "5",
      },
    ],
  },
  {
    name: `Uzyskanie w zawodach wiedzy będących konkursem o zasięgu międzynarodowym lub ogólnopolskim albo
             turniejem o zasięgu ogólnopolskim:`,
    selectedFieldIndex: 0,
    fields: [
      { name: "brak", value: "0" },
      {
        name: `tytułu finalisty konkursu z przedmiotu lub przedmiotów artystycznych objętych ramowym
                 planem nauczania szkoły artystycznej`,
        value: "10",
      },
      {
        name: `tytułu laureata turnieju z przedmiotu lub przedmiotów artystycznych nieobjętych ramowym
                 planem nauczania szkoły artystycznej`,
        value: "4",
      },
      {
        name: `tytułu finalisty turnieju z przedmiotu lub przedmiotów artystycznych nieobjętych ramowym 
                planem nauczania szkoły artystycznej`,
        value: "3",
      },
    ],
  },
  {
    name: "Uzyskanie w zawodach wiedzy będących konkursem o zasięgu wojewódzkim organizowanym przez kuratora oświaty:",
    selectedFieldIndex: 0,
    fields: [
      { name: "brak", value: "0" },
      {
        name: "dwóch lub więcej tytułów finalisty konkursu przedmiotowego",
        value: "10",
      },
      {
        name: "dwóch lub więcej tytułów laureata konkursu tematycznego lub interdyscyplinarnego",
        value: "7",
      },
      {
        name: "dwóch lub więcej tytułów finalisty konkursu tematycznego lub interdyscyplinarnego",
        value: "5",
      },
      { name: "tytułu finalisty konkursu przedmiotowego", value: "7" },
      {
        name: "tytułu laureata konkursu tematycznego lub interdyscyplinarnego",
        value: "5",
      },
      {
        name: "tytułu finalisty konkursu tematycznego lub interdyscyplinarnego",
        value: "3",
      },
    ],
  },
  {
    name: "Uzyskanie w zawodach wiedzy będących konkursem albo turniejem, o zasięgu ponadwojewódzkim lub wojewódzkim:",
    selectedFieldIndex: 0,
    fields: [
      { name: "brak", value: "0" },
      {
        name: "dwóch lub więcej tytułów finalisty konkursu przedmiotowego",
        value: "10",
      },
      {
        name: "dwóch lub więcej tytułów laureata konkursu tematycznego lub interdyscyplinarnego",
        value: "7",
      },
      {
        name: "dwóch lub więcej tytułów finalisty konkursu tematycznego lub interdyscyplinarnego",
        value: "5",
      },
      { name: "tytułu finalisty konkursu przedmiotowego", value: "7" },
      {
        name: "tytułu laureata konkursu tematycznego lub interdyscyplinarnego",
        value: "3",
      },
      {
        name: "tytułu finalisty konkursu tematycznego lub interdyscyplinarnego",
        value: "2",
      },
    ],
  },
  {
    name: `Uzyskanie wysokiego miejsca w zawodach wiedzy innych niż wymienione w pkt 1–4, artystycznych lub sportowych,
                organizowanych przez kuratora oświaty lub inne podmioty działające na terenie szkoły, na szczeblu:`,
    selectedFieldIndex: 0,
    fields: [
      { name: "brak", value: "0" },
      { name: "międzynarodowym", value: "4" },
      { name: "krajowym", value: "3" },
      { name: "wojewódzkim", value: "2" },
      { name: "powiatowym", value: "1" },
    ],
  },
];
