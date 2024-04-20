import usePlatForms from "./usePlatForms";

const usePlatform = (id?: number) => {
    const { data: platforms } = usePlatForms();
  return platforms?.results.find(
    (plat) => plat.id === id
  );
}

export default usePlatform;