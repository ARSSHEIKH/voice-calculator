let thousand = 1000
let seconds = 3600

export const coulombCalculation = (method, num) => {
    if (method === "megacoulomb to coulomb") return Number.parseFloat(eval(num * (thousand * thousand)));
    else if (method === "coulomb to megacoulomb") return Number.parseFloat(eval(num / (thousand * thousand)));

    else if (method === "kilocoulomb to coulomb") return Number.parseFloat(eval(num * thousand));
    else if (method === "kilocoulomb to megacoulomb") return Number.parseFloat(eval(num / thousand));

    else if (method === "millicoulomb to coulomb") return Number.parseFloat(eval(num / thousand));
    else if (method === "millicoulomb to megacoulomb") return Number.parseFloat(eval(num * 1.E-9));

    else if (method === "microcoulomb to coulomb") return Number.parseFloat(eval(num * 0.000001));
    else if (method === "microcoulomb to megacoulomb") return Number.parseFloat(eval(num * 1.E-12));

    else if (method === "nanocoulomb to coulomb") return Number.parseFloat(eval(num * 1.E-9));
    else if (method === "nanocoulomb to megacoulomb") return Number.parseFloat(eval(num * 1.E-15));

    else if (method === "picocoulomb to coulomb") return Number.parseFloat(eval(num * 1.E-12));
    else if (method === "picocoulomb to megacoulomb") return Number.parseFloat(eval(num * 1.E-18));

    else if (method === "abcoulomb to coulomb") return Number.parseFloat(eval(num * 10));
    else if (method === "abcoulomb to megacoulomb") return Number.parseFloat(eval(num * 0.00001));

    else if (method === "emu_charge to coulomb") return Number.parseFloat(eval(num * 10));
    else if (method === "emu_charge to megacoulomb") return Number.parseFloat(eval(num * 0.00001));

    else if (method === "statcoulomb to coulomb") return Number.parseFloat(eval(num * 3.335640951E-10));
    else if (method === "statcoulomb to megacoulomb") return Number.parseFloat(eval(num * 3.335640951E-16));

    else if (method === "esu_charge to coulomb") return Number.parseFloat(eval(num * 3.335640951E-10));
    else if (method === "esu_charge to megacoulomb") return Number.parseFloat(eval(num * 3.335640951E-16));

    else if (method === "franklin to coulomb") return Number.parseFloat(eval(num * 3.335640951E-10));
    else if (method === "franklin to megacoulomb") return Number.parseFloat(eval(num * 3.335640951E-16));

    else if (method === "ampere-hour to coulomb") return Number.parseFloat(eval(num * 3600));
    else if (method === "ampere-hour to megacoulomb") return Number.parseFloat(eval(num * 0.0036));

    else if (method === "ampere-minute to coulomb") return Number.parseFloat(eval(num * 60));
    else if (method === "ampere-minute to megacoulomb") return Number.parseFloat(eval(num * 0.00006));

    else if (method === "ampere-second to coulomb") return Number.parseFloat(eval(num * 1));
    else if (method === "ampere-second to megacoulomb") return Number.parseFloat(eval(num * 0.000001));

    else if (method === "faraday to coulomb") return Number.parseFloat(eval(num * 96485.309));
    else if (method === "faraday to megacoulomb") return Number.parseFloat(eval(num * 0.096485309));

    else if (method === "elementary_charge to coulomb") return Number.parseFloat(eval(num * 1.60217733E-19));
    else if (method === "elementary_charge to megacoulomb") return Number.parseFloat(eval(num * 1.60217733E-25));


    // kilocoulomb
    else if (method === "coulomb to kilocoulomb") return Number.parseFloat(eval(num / thousand));
    else if (method === "megacoulomb to kilocoulomb") return Number.parseFloat(eval(num * thousand));
    else if (method === "millicoulomb to kilocoulomb") return Number.parseFloat(eval(num / (thousand * thousand)));
    else if (method === "microcoulomb to kilocoulomb") return Number.parseFloat(eval(num / Math.pow(thousand, 3)));
    else if (method === "nanocoulomb to kilocoulomb") return Number.parseFloat(eval(num / Math.pow(thousand, 4)));
    else if (method === "picocoulomb to kilocoulomb") return Number.parseFloat(eval(num / Math.pow(thousand, 5)));
    else if (method === "abcoulomb to kilocoulomb") return Number.parseFloat(eval(num / (thousand / 10)));
    else if (method === "emu_charge to kilocoulomb") return Number.parseFloat(eval(num / (thousand / 10)));
    else if (method === "statcoulomb to kilocoulomb") return Number.parseFloat(eval(num * 3.335640951E-13));
    else if (method === "esu_charge to kilocoulomb") return Number.parseFloat(eval(num * 3.335640951E-13));
    else if (method === "franklin to kilocoulomb") return Number.parseFloat(eval(num * 3.335640951E-13));
    else if (method === "ampere-hour to kilocoulomb") return Number.parseFloat(eval(num * 3.6));
    else if (method === "ampere-minute to kilocoulomb") return Number.parseFloat(eval(num * 0.06));
    else if (method === "ampere-second to kilocoulomb") return Number.parseFloat(eval(num * 0.001));
    else if (method === "faraday to kilocoulomb") return Number.parseFloat(eval(num * 96.485309));
    else if (method === "elementary_charge to kilocoulomb") return Number.parseFloat(eval(num * 1.60217733E-22));


    // to millicoulomb
    else if (method === "coulomb to millicoulomb") return Number.parseFloat(eval(num * thousand));
    else if (method === "megacoulomb to millicoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 3)));
    else if (method === "kilocoulomb to millicoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 2)));
    else if (method === "microcoulomb to millicoulomb") return Number.parseFloat(eval(num / thousand));
    else if (method === "nanocoulomb to millicoulomb") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "picocoulomb to millicoulomb") return Number.parseFloat(eval(num / Math.pow(thousand, 3)));
    else if (method === "abcoulomb to millicoulomb") return Number.parseFloat(eval(num * (thousand * 10)));
    else if (method === "emu_charge to millicoulomb") return Number.parseFloat(eval(num * (thousand * 10)));
    else if (method === "statcoulomb to millicoulomb") return Number.parseFloat(eval(num * 3.335640951E-7));
    else if (method === "esu_charge to millicoulomb") return Number.parseFloat(eval(num * 3.335640951E-7));
    else if (method === "franklin to millicoulomb") return Number.parseFloat(eval(num * 3.335640951E-7));
    else if (method === "ampere-hour to millicoulomb") return Number.parseFloat(eval(num * (seconds * thousand)));
    else if (method === "ampere-minute to millicoulomb") return Number.parseFloat(eval(num * (60 * thousand)));
    else if (method === "ampere-second to millicoulomb") return Number.parseFloat(eval(num * thousand));
    else if (method === "faraday to millicoulomb") return Number.parseFloat(eval(num * 96485309));
    else if (method === "elementary_charge to millicoulomb") return Number.parseFloat(eval(num * 1.60217733E-16));

    // to microcoulomb
    else if (method === "coulomb to microcoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 2)));
    else if (method === "megacoulomb to microcoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 4)));
    else if (method === "kilocoulomb to microcoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 3)));
    else if (method === "millicoulomb to microcoulomb") return Number.parseFloat(eval(num * thousand));
    else if (method === "nanocoulomb to microcoulomb") return Number.parseFloat(eval(num / thousand));
    else if (method === "picocoulomb to microcoulomb") return Number.parseFloat(eval(num / Math.pow(thousand, 2)));
    else if (method === "abcoulomb to microcoulomb") return Number.parseFloat(eval(num * (thousand * thousand * 10)));
    else if (method === "emu_charge to microcoulomb") return Number.parseFloat(eval(num * (thousand * thousand * 10)));
    else if (method === "statcoulomb to microcoulomb") return Number.parseFloat(eval(num * 0.0003335641));
    else if (method === "esu_charge to microcoulomb") return Number.parseFloat(eval(num * 0.0003335641));
    else if (method === "franklin to microcoulomb") return Number.parseFloat(eval(num * 0.0003335641));
    else if (method === "ampere-hour to microcoulomb") return Number.parseFloat(eval(num * (seconds * thousand * thousand)));
    else if (method === "ampere-minute to microcoulomb") return Number.parseFloat(eval(num * 60000000));
    else if (method === "ampere-second to microcoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 2)));
    else if (method === "faraday to microcoulomb") return Number.parseFloat(eval(num * 96485309000));
    else if (method === "elementary_charge to microcoulomb") return Number.parseFloat(eval(num * 1.60217733E-13));

    // to nanocoulomb
    else if (method === "coulomb to nanocoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 3)));
    else if (method === "megacoulomb to nanocoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 5)));
    else if (method === "kilocoulomb to nanocoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 4)));
    else if (method === "millicoulomb to nanocoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 2)));
    else if (method === "microcoulomb to nanocoulomb") return Number.parseFloat(eval(num * thousand));
    else if (method === "picocoulomb to nanocoulomb") return Number.parseFloat(eval(num / thousand));
    else if (method === "abcoulomb to nanocoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 3) * 10));
    else if (method === "emu_charge to nanocoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 3) * 10));
    else if (method === "statcoulomb to nanocoulomb") return Number.parseFloat(eval(num * 0.3335640952));
    else if (method === "esu_charge to nanocoulomb") return Number.parseFloat(eval(num * 0.3335640952));
    else if (method === "franklin to nanocoulomb") return Number.parseFloat(eval(num * 0.3335640952));
    else if (method === "ampere-hour to nanocoulomb") return Number.parseFloat(eval(num * (seconds * Math.pow(thousand, 3))));
    else if (method === "ampere-minute to nanocoulomb") return Number.parseFloat(eval(num * 60000000000));
    else if (method === "ampere-second to nanocoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 3)));
    else if (method === "faraday to nanocoulomb") return Number.parseFloat(eval(num * 96485309000004));
    else if (method === "elementary_charge to nanocoulomb") return Number.parseFloat(eval(num * 1.60217733E-10));

    // to picocoulomb
    else if (method === "coulomb to picocoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 4)));
    else if (method === "megacoulomb to picocoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 6)));
    else if (method === "kilocoulomb to picocoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 5)));
    else if (method === "millicoulomb to picocoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 3)));
    else if (method === "microcoulomb to picocoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 2)));
    else if (method === "nanocoulomb to picocoulomb") return Number.parseFloat(eval(num * thousand));
    else if (method === "abcoulomb to picocoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 4) * 10));
    else if (method === "emu_charge to picocoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 4) * 10));
    else if (method === "statcoulomb to picocoulomb") return Number.parseFloat(eval(num * 333.5640952));
    else if (method === "esu_charge to picocoulomb") return Number.parseFloat(eval(num * 333.5640952));
    else if (method === "franklin to picocoulomb") return Number.parseFloat(eval(num * 333.5640952));
    else if (method === "ampere-hour to picocoulomb") return Number.parseFloat(eval(num * 3599999999999972));
    else if (method === "ampere-minute to picocoulomb") return Number.parseFloat(eval(num * 59999999999999));
    else if (method === "ampere-second to picocoulomb") return Number.parseFloat(eval(num * Math.pow(thousand, 4)));
    else if (method === "faraday to picocoulomb") return Number.parseFloat(eval(num * 96485309000004300));
    else if (method === "elementary_charge to picocoulomb") return Number.parseFloat(eval(num * 1.60217733E-7));

    // to abcoulomb
    else if (method === "coulomb to abcoulomb") return Number.parseFloat(eval(num * 0.1));
    else if (method === "megacoulomb to abcoulomb") return Number.parseFloat(eval(num * thousand * 100));
    else if (method === "kilocoulomb to abcoulomb") return Number.parseFloat(eval(num * 100));
    else if (method === "millicoulomb to abcoulomb") return Number.parseFloat(eval(num / (thousand*10)));
    else if (method === "microcoulomb to abcoulomb") return Number.parseFloat(eval(num * 1.E-7));
    else if (method === "nanocoulomb to abcoulomb") return Number.parseFloat(eval(num * 1.E-10));
    else if (method === "picocoulomb to abcoulomb") return Number.parseFloat(eval(num * 1.E-13));
    else if (method === "emu_charge to abcoulomb") return Number.parseFloat(eval(num * 1));
    else if (method === "statcoulomb to abcoulomb") return Number.parseFloat(eval(num * 3.335640951E-11));
    else if (method === "esu_charge to abcoulomb") return Number.parseFloat(eval(num * 3.335640951E-11));
    else if (method === "franklin to abcoulomb") return Number.parseFloat(eval(num * 3.335640951E-11));
    else if (method === "ampere-hour to abcoulomb") return Number.parseFloat(eval(num * 360));
    else if (method === "ampere-minute to abcoulomb") return Number.parseFloat(eval(num * 6));
    else if (method === "ampere-second to abcoulomb") return Number.parseFloat(eval(num * 0.1));
    else if (method === "faraday to abcoulomb") return Number.parseFloat(eval(num * 9648.5309));
    else if (method === "elementary_charge to abcoulomb") return Number.parseFloat(eval(num * 1.60217733E-20));

    // to emu_charge
    else if (method === "coulomb to emu_charge") return Number.parseFloat(eval(num * 0.1));
    else if (method === "megacoulomb to emu_charge") return Number.parseFloat(eval(num * thousand * 100));
    else if (method === "kilocoulomb to emu_charge") return Number.parseFloat(eval(num * 100));
    else if (method === "millicoulomb to emu_charge") return Number.parseFloat(eval(num / thousand));
    else if (method === "microcoulomb to emu_charge") return Number.parseFloat(eval(num * 1.E-7));
    else if (method === "nanocoulomb to emu_charge") return Number.parseFloat(eval(num * 1.E-10));
    else if (method === "picocoulomb to emu_charge") return Number.parseFloat(eval(num * 1.E-13));
    else if (method === "abcoulomb to emu_charge") return Number.parseFloat(eval(num * 1));
    else if (method === "statcoulomb to emu_charge") return Number.parseFloat(eval(num * 3.335640951E-11));
    else if (method === "esu_charge to abcoulomb") return Number.parseFloat(eval(num * 3.335640951E-11));
    else if (method === "franklin to emu_charge") return Number.parseFloat(eval(num * 3.335640951E-11));
    else if (method === "ampere-hour to emu_charge") return Number.parseFloat(eval(num * 360));
    else if (method === "ampere-minute to emu_charge") return Number.parseFloat(eval(num * 6));
    else if (method === "ampere-second to emu_charge") return Number.parseFloat(eval(num * 0.1));
    else if (method === "faraday to emu_charge") return Number.parseFloat(eval(num * 9648.5309));
    else if (method === "elementary_charge to emu_charge") return Number.parseFloat(eval(num * 1.60217733E-20));

    // to statcoulomb
    else if (method === "coulomb to statcoulomb") return Number.parseFloat(eval(num * 2997924580));
    else if (method === "megacoulomb to statcoulomb") return Number.parseFloat(eval(num * 2997924579999600));
    else if (method === "kilocoulomb to statcoulomb") return Number.parseFloat(eval(num * 2997924580000));
    else if (method === "millicoulomb to statcoulomb") return Number.parseFloat(eval(num * 2997924.58));
    else if (method === "microcoulomb to statcoulomb") return Number.parseFloat(eval(num * 2997.92458));
    else if (method === "nanocoulomb to statcoulomb") return Number.parseFloat(eval(num * 2.99792458));
    else if (method === "picocoulomb to statcoulomb") return Number.parseFloat(eval(num * 0.0029979246));
    else if (method === "abcoulomb to statcoulomb") return Number.parseFloat(eval(num * 29979245800));
    else if (method === "emu_charge to statcoulomb") return Number.parseFloat(eval(num * 29979245800));
    else if (method === "esu_charge to statcoulomb") return Number.parseFloat(eval(num * 1));
    else if (method === "franklin to statcoulomb") return Number.parseFloat(eval(num * 1));
    else if (method === "ampere-hour to statcoulomb") return Number.parseFloat(eval(num * 10792528487998));
    else if (method === "ampere-minute to statcoulomb") return Number.parseFloat(eval(num * 179875474800));
    else if (method === "ampere-second to statcoulomb") return Number.parseFloat(eval(num * 2997924580));
    else if (method === "faraday to statcoulomb") return Number.parseFloat(eval(num * 289255679459970));
    else if (method === "elementary_charge to statcoulomb") return Number.parseFloat(eval(num * 4.803206799E-10));

    // to esu_charge
    else if (method === "coulomb to esu_charge") return Number.parseFloat(eval(num * 2997924580));
    else if (method === "megacoulomb to esu_charge") return Number.parseFloat(eval(num * 2997924579999600));
    else if (method === "kilocoulomb to esu_charge") return Number.parseFloat(eval(num * 2997924580000));
    else if (method === "millicoulomb to esu_charge") return Number.parseFloat(eval(num * 2997924.58));
    else if (method === "microcoulomb to esu_charge") return Number.parseFloat(eval(num * 2997.92458));
    else if (method === "nanocoulomb to esu_charge") return Number.parseFloat(eval(num * 2.99792458));
    else if (method === "picocoulomb to esu_charge") return Number.parseFloat(eval(num * 0.0029979246));
    else if (method === "abcoulomb to esu_charge") return Number.parseFloat(eval(num * 29979245800));
    else if (method === "emu_charge to esu_charge") return Number.parseFloat(eval(num * 29979245800));
    else if (method === "statcoulomb to esu_charge") return Number.parseFloat(eval(num * 1));
    else if (method === "franklin to esu_charge") return Number.parseFloat(eval(num * 1));
    else if (method === "ampere-hour to esu_charge") return Number.parseFloat(eval(num * 10792528487998));
    else if (method === "ampere-minute to esu_charge") return Number.parseFloat(eval(num * 179875474800));
    else if (method === "ampere-second to esu_charge") return Number.parseFloat(eval(num * 2997924580));
    else if (method === "faraday to esu_charge") return Number.parseFloat(eval(num * 289255679459970));
    else if (method === "elementary_charge to esu_charge") return Number.parseFloat(eval(num * 4.803206799E-10));

    // to franklin
    else if (method === "coulomb to franklin") return Number.parseFloat(eval(num * 2997924580));
    else if (method === "megacoulomb to franklin") return Number.parseFloat(eval(num * 2997924579999600));
    else if (method === "kilocoulomb to franklin") return Number.parseFloat(eval(num * 2997924580000));
    else if (method === "millicoulomb to franklin") return Number.parseFloat(eval(num * 2997924.58));
    else if (method === "microcoulomb to franklin") return Number.parseFloat(eval(num * 2997.92458));
    else if (method === "nanocoulomb to franklin") return Number.parseFloat(eval(num * 2.99792458));
    else if (method === "picocoulomb to franklin") return Number.parseFloat(eval(num * 0.0029979246));
    else if (method === "abcoulomb to franklin") return Number.parseFloat(eval(num * 29979245800));
    else if (method === "emu_charge to franklin") return Number.parseFloat(eval(num * 29979245800));
    else if (method === "statcoulomb to franklin") return Number.parseFloat(eval(num * 1));
    else if (method === "esu_charge to franklin") return Number.parseFloat(eval(num * 1));
    else if (method === "ampere-hour to franklin") return Number.parseFloat(eval(num * 10792528487998));
    else if (method === "ampere-minute to franklin") return Number.parseFloat(eval(num * 179875474800));
    else if (method === "ampere-second to franklin") return Number.parseFloat(eval(num * 2997924580));
    else if (method === "faraday to franklin") return Number.parseFloat(eval(num * 289255679459970));
    else if (method === "elementary_charge to franklin") return Number.parseFloat(eval(num * 4.803206799E-10));

    // to ampere-hour
    else if (method === "coulomb to ampere-hour") return Number.parseFloat(eval(num * 0.0002777778));
    else if (method === "megacoulomb to ampere-hour") return Number.parseFloat(eval(num * 277.77777778));
    else if (method === "kilocoulomb to ampere-hour") return Number.parseFloat(eval(num * 0.2777777778));
    else if (method === "millicoulomb to ampere-hour") return Number.parseFloat(eval(num * 2.777777777E-7));
    else if (method === "microcoulomb to ampere-hour") return Number.parseFloat(eval(num * 2.777777777E-10));
    else if (method === "nanocoulomb to ampere-hour") return Number.parseFloat(eval(num * 2.777777777E-13));
    else if (method === "picocoulomb to ampere-hour") return Number.parseFloat(eval(num * 2.777777777E-16));
    else if (method === "abcoulomb to ampere-hour") return Number.parseFloat(eval(num * 0.0027777778));
    else if (method === "emu_charge to ampere-hour") return Number.parseFloat(eval(num * 0.0027777778));
    else if (method === "statcoulomb to ampere-hour") return Number.parseFloat(eval(num * 9.265669311E-14));
    else if (method === "esu_charge to ampere-hour") return Number.parseFloat(eval(num * 9.265669311E-14));
    else if (method === "franklin to ampere-hour") return Number.parseFloat(eval(num * 9.265669311E-14));
    else if (method === "ampere-minute to ampere-hour") return Number.parseFloat(eval(num * 0.0166666667));
    else if (method === "ampere-second to ampere-hour") return Number.parseFloat(eval(num * 0.0002777778));
    else if (method === "faraday to ampere-hour") return Number.parseFloat(eval(num * 26.801474722));
    else if (method === "elementary_charge to ampere-hour") return Number.parseFloat(eval(num * 4.803206799E-23));

    // to ampere-minute
    else if (method === "coulomb to ampere-minute") return Number.parseFloat(eval(num * 0.0166666667));
    else if (method === "megacoulomb to ampere-minute") return Number.parseFloat(eval(num * 16666.666667));
    else if (method === "kilocoulomb to ampere-minute") return Number.parseFloat(eval(num * 16.666666667));
    else if (method === "millicoulomb to ampere-minute") return Number.parseFloat(eval(num * 0.0000166667));
    else if (method === "microcoulomb to ampere-minute") return Number.parseFloat(eval(num * 1.666666666E-8));
    else if (method === "nanocoulomb to ampere-minute") return Number.parseFloat(eval(num * 1.666666666E-11));
    else if (method === "picocoulomb to ampere-minute") return Number.parseFloat(eval(num * 1.666666666E-14));
    else if (method === "abcoulomb to ampere-minute") return Number.parseFloat(eval(num * 0.1666666667));
    else if (method === "emu_charge to ampere-minute") return Number.parseFloat(eval(num * 0.1666666667));
    else if (method === "statcoulomb to ampere-minute") return Number.parseFloat(eval(num * 5.559401586E-12));
    else if (method === "esu_charge to ampere-minute") return Number.parseFloat(eval(num * 5.559401586E-12));
    else if (method === "franklin to ampere-minute") return Number.parseFloat(eval(num * 5.559401586E-12));
    else if (method === "ampere-hour to ampere-minute") return Number.parseFloat(eval(num * 60));
    else if (method === "ampere-second to ampere-minute") return Number.parseFloat(eval(num * 0.0166666667));
    else if (method === "faraday to ampere-minute") return Number.parseFloat(eval(num * 1608.0884833));
    else if (method === "elementary_charge to ampere-minute") return Number.parseFloat(eval(num * 2.67029555E-21));

    // to ampere-second
    else if (method === "coulomb to ampere-second") return Number.parseFloat(eval(num * 1));
    else if (method === "megacoulomb to ampere-second") return Number.parseFloat(eval(num * 1000000));
    else if (method === "kilocoulomb to ampere-second") return Number.parseFloat(eval(num * thousand));
    else if (method === "millicoulomb to ampere-second") return Number.parseFloat(eval(num / thousand));
    else if (method === "microcoulomb to ampere-second") return Number.parseFloat(eval(num * 0.000001));
    else if (method === "nanocoulomb to ampere-second") return Number.parseFloat(eval(num * 1.E-9));
    else if (method === "picocoulomb to ampere-second") return Number.parseFloat(eval(num * 1.E-12));
    else if (method === "abcoulomb to ampere-second") return Number.parseFloat(eval(num * 10));
    else if (method === "emu_charge to ampere-second") return Number.parseFloat(eval(num * 10));
    else if (method === "statcoulomb to ampere-second") return Number.parseFloat(eval(num * 3.335640951E-10));
    else if (method === "esu_charge to ampere-second") return Number.parseFloat(eval(num * 3.335640951E-10));
    else if (method === "franklin to ampere-second") return Number.parseFloat(eval(num * 3.335640951E-10));
    else if (method === "ampere-minute to ampere-second") return Number.parseFloat(eval(num * 60));
    else if (method === "ampere-hour to ampere-second") return Number.parseFloat(eval(num * seconds));
    else if (method === "faraday to ampere-second") return Number.parseFloat(eval(num * 96485.309));
    else if (method === "elementary_charge to ampere-second") return Number.parseFloat(eval(num * 1.60217733E-19));


    // to faraday
    else if (method === "coulomb to faraday") return Number.parseFloat(eval(num * 0.0000103643));
    else if (method === "megacoulomb to faraday") return Number.parseFloat(eval(num * 10.36427214));
    else if (method === "kilocoulomb to faraday") return Number.parseFloat(eval(num * 0.0103642721));
    else if (method === "millicoulomb to faraday") return Number.parseFloat(eval(num * 1.036427214E-8));
    else if (method === "microcoulomb to faraday") return Number.parseFloat(eval(num * 1.036427214E-11));
    else if (method === "nanocoulomb to faraday") return Number.parseFloat(eval(num * 1.036427214E-14));
    else if (method === "picocoulomb to faraday") return Number.parseFloat(eval(num * 1.036427214E-17));
    else if (method === "abcoulomb to faraday") return Number.parseFloat(eval(num * 0.0001036427));
    else if (method === "emu_charge to faraday") return Number.parseFloat(eval(num * 0.0001036427));
    else if (method === "statcoulomb to faraday") return Number.parseFloat(eval(num * 3.457149058E-15));
    else if (method === "esu_charge to faraday") return Number.parseFloat(eval(num * 3.457149058E-15));
    else if (method === "franklin to faraday") return Number.parseFloat(eval(num * 3.457149058E-15));
    else if (method === "ampere-hour to faraday") return Number.parseFloat(eval(num * 0.0373113797));
    else if (method === "ampere-minute to faraday") return Number.parseFloat(eval(num * 0.0006218563));
    else if (method === "ampere-second to faraday") return Number.parseFloat(eval(num * 0.0000103643));
    else if (method === "elementary_charge to faraday") return Number.parseFloat(eval(num * 1.660540186E-24));

    // to elementary_charge
    else if (method === "coulomb to elementary_charge") return Number.parseFloat(eval(num * 6241506363094001000));
    else if (method === "megacoulomb to elementary_charge") return Number.parseFloat(eval(num * 6.241506363E+24));
    else if (method === "kilocoulomb to elementary_charge") return Number.parseFloat(eval(num * 6.241506363E+21));
    else if (method === "millicoulomb to elementary_charge") return Number.parseFloat(eval(num * 6241506363094000));
    else if (method === "microcoulomb to elementary_charge") return Number.parseFloat(eval(num * 6241506363094));
    else if (method === "nanocoulomb to elementary_charge") return Number.parseFloat(eval(num * 6241506363.1));
    else if (method === "picocoulomb to elementary_charge") return Number.parseFloat(eval(num * 6241506.3631));
    else if (method === "abcoulomb to elementary_charge") return Number.parseFloat(eval(num * 62415063630940004000));
    else if (method === "emu_charge to elementary_charge") return Number.parseFloat(eval(num * 62415063630940004000));
    else if (method === "statcoulomb to elementary_charge") return Number.parseFloat(eval(num * 2081942422.7));
    else if (method === "esu_charge to elementary_charge") return Number.parseFloat(eval(num * 2081942422.7));
    else if (method === "franklin to elementary_charge") return Number.parseFloat(eval(num * 2081942422.7));
    else if (method === "ampere-hour to elementary_charge") return Number.parseFloat(eval(num * 2.24694229E+22));
    else if (method === "ampere-minute to elementary_charge") return Number.parseFloat(eval(num * 374490381785632540000));
    else if (method === "ampere-second to elementary_charge") return Number.parseFloat(eval(num * 6241506363094001000));
    else if (method === "faraday to elementary_charge") return Number.parseFloat(eval(num * 6.0221367E+239));



}