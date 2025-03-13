import MapAtom from '../01-atoms/MapAtom'
import ContentTitleTextMol from '../02-molecules/ContentTitleTextMol'

const SectionLocationTpl = () => {
  return (
    <section>
      <ContentTitleTextMol
        title="Onde estamos"
        text="Avenida Comendador Pereira Inácio, 900 - Jardim Vergueiro, Sorocaba/SP"
      />
      <MapAtom />
    </section>
  )
}

export default SectionLocationTpl
