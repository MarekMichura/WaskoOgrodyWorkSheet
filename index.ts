const path = "/pracownik/pokaz/godziny_pracy/2025/styczeń";

const ERoutes = {
  profil: ["profil"],
  login: ["login"],
  getWorkingHours: ["employee", "get", "hours"],
  getWorkingHoursDynamic: ["employee", "get", "hours", "[year]", "[month]"],
};

const ERoutesEN = {
  profil: "/profil",
  login: "/login",
  getWorkingHours: "/employee/get/hours",
  getWorkingHoursDynamic: "/employee/get/hours/[year]/[month]",
};

const ERoutesPL = {
  profil: "/uzytkownik",
  login: "/zaloguj_się",
  getWorkingHours: "/pracownik/pokaz/godziny_pracy",
  getWorkingHoursDynamic: "/pracownik/pokaz/godziny_pracy/[year]/[month]",
};

const ERoutesPLSplitted = Object.entries(ERoutesPL) //
  .map(([key, v]) => ({ key, value: splitRemoveEmpty(v) }));

function splitRemoveEmpty(a: string) {
  return a.split("/").filter((a) => a !== "");
}

function isDynamicProps(a: string) {
  return a.at(0) === "[" && a.at(-1) === "]";
}

function filterMapFun(a: string, b: string) {
  return isDynamicProps(a) || a === b;
}

function combinePaths(a: string, b: string, c: string) {
  if (isDynamicProps(b)) return a + "/" + c;
  return a + "/" + b;
}

function replacePath(path: string, routes: typeof ERoutesPLSplitted) {
  const pathSplit = path.split("/").filter((a) => a !== "");
  let map = ERoutesPLSplitted.filter(
    (a) => a.value.length === pathSplit.length
  );

  for (let i = 0; i < pathSplit.length; i++) {
    if (map.length === 0) break;

    map = map.filter((map) => filterMapFun(map.value[i], pathSplit[i]));
  }
  const result = map.pop();
  if (result === undefined) return;
  return (ERoutes[result.key] as string[]).reduce((a, b, c) =>
    combinePaths(a, b, pathSplit[c])
  );
}

console.log(replacePath(path, ERoutesPLSplitted));
