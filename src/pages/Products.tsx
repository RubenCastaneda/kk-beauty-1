import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard/ProductCard';
import { products as featuredProducts } from '../components/FeaturedProducts/FeaturedProducts';
import ProductModal, { Product } from '../components/ProductModal/ProductModal';
import HeroTextSection from '../components/Hero/HeroTextSection';
import logo from '../logo.svg';

const allProductImages = [
  '/images/product_pictures/AHA Hand Creme (black BG).png',
  '/images/product_pictures/Biomed Retinol 500 (black BG).png',
  '/images/product_pictures/Cascading AOX + Enviro Serum (black BG).png',
  '/images/product_pictures/Glycolic Cleanser (black BG).png',
  '/images/product_pictures/Glycolic Toner (black BG).png',
  '/images/product_pictures/Hexapeptide Moisture Creme (black BG).png',
  '/images/product_pictures/Hyaluronic Toner (black BG).png',
  '/images/product_pictures/Illuminating Peptide Creme (black BG).png',
  '/images/product_pictures/Retinol & Lactic Exfoliating Serum (black BG).png',
  '/images/product_pictures/Tranexamic B3 Serum (black BG).png',
  '/images/product_pictures/UPDATE BLACK BGpng.png',
];

const extraDetails: Record<number, Partial<Product>> = {
  4: {
    name: 'Glycolic Cleanser',
    description:
      'Gently lifts away impurities and dull surface cells while preserving the skin\u2019s natural radiance.',
    skinTypes: 'Mature \u00b7 Oily/Combination \u00b7 Hyperpigmented',
    whatItDoes:
      'Gently lifts away impurities and dull surface cells while preserving the skin\u2019s natural radiance. Alpha-hydroxy glycolic acid cleanses thoroughly without stripping essential moisture. Botanical extracts of Comfrey, Burdock, and Dandelion enhance hydration and help fortify the skin barrier.',
    howToUseClient: [
      'Wet hands, face, and neck.',
      'Massage a small amount of cleanser into skin, avoiding the eye area.',
      'Rinse thoroughly. A slight tingling sensation is normal.',
      'Use only as directed. If irritation persists, discontinue use and consult a physician.',
      'Sun care: Areas treated with AHAs must be protected with sunscreen before sun exposure.',
    ],
    professionalUse: [
      'On damp skin, massage a small amount over face and neck in circular motions, avoiding eyes.',
      'Remove completely with moist sponges.',
      'May serve as a peel-prep cleanser prior to exfoliation.',
    ],
    sunburnAlert:
      'This product contains an Alpha Hydroxy Acid (AHA) that can increase skin sensitivity to the sun and the likelihood of sunburn. While using this product\u2014and for one week afterward\u2014apply broad-spectrum sunscreen daily, wear protective clothing, and limit sun exposure.',
    cautions:
      'For external use only. Avoid eyes and mucous membranes. Mild stinging may occur. If irritation develops, discontinue use and consult your skincare professional. Exercise care when layering with other exfoliating products.',
    ingredients:
      'Aqua (Purified Water), Tetrahydroxypropyl Ethylenediamine, Glycolic Acid, Helianthus Annuus (Sunflower) Seed Oil, Stearyl Alcohol, Arachidyl Alcohol, Glycerin, Glyceryl Stearate, Persea Gratissima (Avocado) Oil, Butyrospermum Parkii (Shea) Butter, Lauryl Lactate, Behenyl Alcohol, Decyl Glucoside, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Cetyl Alcohol, Euphorbia Cerifera (Candelilla) Wax, Arachidyl Glucoside, Sodium Stearoyl Lactylate, Phenoxyethanol, Caprylyl Glycol, Xanthan Gum, Citrus Limon (Lemon) Peel Oil, Lauryl Glucoside, Citrus Paradisi (Grapefruit) Peel Oil, Tocopheryl Acetate, Lavandula Angustifolia (Lavender) Flower/Leaf/Stem Extract, Sorbic Acid, Acetyl Hexapeptide-8, Pentapeptide-18, Limonene, Citrus Limon Peel Oil, Linalool.',
    ph: '3.5 \u2013 4.5',
  },
  5: {
    name: 'Glycolic Toner',
    description:
      'Enhance topical clarity with this citrus-based Alpha Hydroxy Acid toner that sweeps away excess oils and debris that can obstruct natural radiance. This potent glycolic formula supports a luminous complexion.',
    skinTypes: 'Mature · Oily/Combination Skin · Hyperpigmented',
    howToUseClient: ['Apply toner to skin with cotton pad.'],
    professionalUse: [
      'After cleansing, apply toner with cotton pad to remove residue from cleanser, makeup or hard water.',
      'Excellent for use prior to exfoliation treatments.',
    ],
    sunburnAlert:
      'This product contains an Alpha Hydroxy Acid (AHA) that may increase your skin’s sensitivity to the sun and particularly the possibility of sunburn. Use a sunscreen, wear protective clothing, and limit sun exposure while using this product and for a week afterwards.',
    cautions:
      'Use only as directed. Avoid contact with the eyes. If irritation persists, discontinue use and consult a physician. Daily use of sunscreen recommended with any glycolic product. Use caution when combining with other exfoliating products.',
    ingredients:
      'Aqua (Purified Water), Tetrahydroxypropyl Ethylenediamine, Glycolic Acid, Glycerin, Polysorbate 20, Panthenol, 1,2-Hexanediol, Caprylyl Glycol, Citrus Paradisi (Grapefruit) Peel Oil, Citrus Limon (Lemon) Peel Oil, Lactic Acid, Fucus Vesiculosus Extract, Chamomilla Recutita (Matricaria) Flower Extract, Lavandula Angustifolia (Lavender) Flower/Leaf/Stem Extract, Vaccinium Myrtillus Fruit/Leaf Extract, Saccharum Officinarum (Sugarcane) Extract, Malic Acid, Citrus Aurantium Dulcis (Orange) Fruit Extract, Citrus Limon (Lemon) Fruit Extract, Camellia Sinensis Leaf Extract, Foeniculum Vulgare (Fennel) Fruit Extract, Acer Saccharum (Sugar Maple) Extract, Tartaric Acid, Mentha Viridis (Spearmint) Extract, Glycyrrhiza Glabra (Licorice) Root Extract, Pyrus Malus (Apple) Fruit Extract, Pogostemon Cablin Leaf Extract, Eucalyptus Globulus Leaf Extract, Anthemis Nobilis Flower Extract, Symphytum Officinale Leaf Extract, Rosa Canina Flower Extract, Mentha Arvensis Leaf Extract, Vaccinium Macrocarpon (Cranberry) Fruit Extract, Limonene, Linalool.',
    ph: '4.0 - 5.0',
  },
  10: {
    name: 'Tranexamic B3 Serum',
    description:
      'Achieve a more radiant complexion with this concentrated serum offering a revitalizing complex of natural fruit acids, Niacinamide and biometric Nonapeptide-1. Tranexamic and alpha hydroxy acids further elevate skin radiance and clarity.',
    skinTypes: 'Hyperpigmented · Oily/Combination Skin',
    howToUseClient: [
      'AM and PM. Apply 2 to 3 drops of serum to face and décolleté following thorough cleansing of the skin. Allow to absorb.',
    ],
    sunburnAlert:
      'This product contains an Alpha Hydroxy Acid (AHA) that may increase your skin’s sensitivity to the sun and particularly the possibility of sunburn. Use a sunscreen, wear protective clothing, and limit sun exposure while using this product and for a week afterwards.',
    cautions:
      'Use only as directed. Avoid contact with the eyes. If irritation persists, discontinue use and consult a physician. Daily use of sunscreen recommended with any glycolic product. Use caution when combining with other exfoliating products.',
    ingredients:
      'Aqua (Purified Water), Niacinamide, Propanediol, Glycolic Acid, Tranexamic Acid, Sodium Citrate, Salicylic Acid, Hydroxyethylcellulose, 1,2-Hexanediol, Caprylyl Glycol, Lactic Acid, Vaccinium Myrtillus Fruit/ Leaf Extract, Saccharum Officinarum (Sugarcane) Extract, Citrus Limon (Lemon) Peel Powder/Extract, Citrus Aurantium Dulcis (Sweet Orange) Fruit Extract, Acer Saccharum (Sugar Maple) Extract, Malic Acid, Tartaric Acid, Nonapeptide-1.',
    ph: '5.5 - 6.5',
  },
  9: {
    name: 'Retinol & Lactic Exfoliating Serum',
    description:
      'An effective conditioning exfoliant offering Retinol, Lactic Acid and Seaweed Extract. Ideal for those seeking a deeper exfoliation with nourishing hydration.',
    skinTypes: 'Mature · All Skin Types Except Extremely Sensitive',
    howToUseClient: [
      'Apply in the evening two to three times per week following cleansing.',
      'Recommended for night use only. Client may experience stinging, redness, dryness and flaking.',
    ],
    professionalUse: ['May be used as a professional exfoliant following standard peel protocol.'],
    sunburnAlert:
      'This product contains an Alpha Hydroxy Acid (AHA) that may increase your skin’s sensitivity to the sun and particularly the possibility of sunburn. Use a sunscreen, wear protective clothing, and limit sun exposure while using this product and for a week afterwards.',
    cautions:
      'Use only as directed. Avoid contact with eyes. Sensitivity to AHAs or retinols should be determined prior to use.',
    ingredients:
      'Aqua (Purified Water), Lactic Acid, Glycerin, Cetearyl Isononanoate, Caprylic/Capric Triglyceride, Hydroxypropyl Starch Phosphate, Ceteareth-20, Cetearyl Alcohol, Retinyl Palmitate, Glycolic Acid, Xanthan Gum, Maltodextrin, Phenoxyethanol, Fucus Vesiculosus Extract, Glyceryl Stearate, Squalane, Retinol, Ceteareth-12, Cetyl Palmitate, Benzoic Acid, Dehydroacetic Acid, Ethylhexylglycerin, Polyaminopropyl Biguanide, Cistus Incanus Extract.',
    ph: '3.5-4.5',
  },
  8: {
    name: 'Illuminating Peptide Crème',
    description:
      'Lightweight daily crème that supports natural radiance with Azelaic and Kojic Acid, Vitamin C, Niacinamide and peptides. Protects against environmental stressors that can lead to dull skin.',
    skinTypes: 'Hyperpigmented · Mature · All Skin Types',
    howToUseClient: [
      'After cleansing and toning, apply a small amount of crème to face, neck and décolleté, massaging gently.',
    ],
    professionalUse: [
      'As a finishing product for clients with hyperpigmented, oily or mature skin. Warm a small amount between palms and massage over face and neck.',
    ],
    ingredients:
      'Aqua (Purified Water), Niacinamide, Caprylic/Capric Triglyceride, Glycerin, Helianthus Annuus (Sunflower) Seed Oil, Coco-Caprylate, Stearyl Alcohol, Butyrospermum Parkii (Shea) Butter, Glyceryl Stearate, Arachidyl Alcohol, Argania Spinosa Kernel Oil, Euphorbia Cerifera (Candelilla) Wax, Simmondsia Chinensis (Jojoba) Seed Oil, Cetyl Alcohol, Behenyl Alcohol, Arachidyl Glucoside, Tocopheryl Acetate, Bisabolol, Cetearyl Alcohol, Cetearyl Glucoside, Tetrahexyldecyl Ascorbate, 1,2-Hexanediol, Caprylyl Glycol, Xanthan Gum, Butylene Glycol, Citrus Aurantium Amara Flower Oil, Retinyl Palmitate, Potassium Azeloyl Diglycinate, Kojic Acid, Alcohol, Azelaic Acid, Cola Nitida Seed Extract, Ilex Paraguariensis Leaf Extract, Paullinia Cupana Seed Extract, Lecithin, Cucumis Sativus (Cucumber) Fruit Extract, Honey, Tropolone, Phospholipids, Hydrolized Rice Protein, Arbutin, Tocopherol, Leuconostoc/Radish Root Ferment Filtrate, Hyaluronic Acid, Sphingolipids, Glutathione, Linolenic Acid, Acetyl Hexapeptide-8, Linoleic Acid, Ascorbyl Palmitate, Fucus Vesiculosus Extract, Palmaria Palmata Extract, Macrocystis Pyrifera (Kelp) Extract, Chondrus Crispus Extract, Leuconostoc Ferment Filtrate, Geraniol, Limonene, Citrus Aurantium Flower Oil, Linalool.',
    ph: '5.0 – 6.0',
  },
  2: {
    name: 'Biomed Retinol 500',
    description:
      'Rich crème offering skin-conditioning benefits of Vitamin A. Contains Retinol and Cariciline® SB to refine and support mature or combination skin while Bisabolol defends against daily stresses.',
    skinTypes: 'Mature · Oily/Combination',
    howToUseClient: [
      'In the evening after cleansing and toning, apply a few drops to entire face and neck.',
      'Avoid sun exposure and use sunscreen. Exercise caution when combining with exfoliating treatments.',
    ],
    professionalUse: [
      'Apply to face and neck and massage gently. Use caution when combining with other exfoliating treatments. Sun protection is recommended.',
    ],
    ingredients:
      'Aqua (Purified Water), Caprylic/Capric Triglyceride, Glycerin, Cyclopentasiloxane, Dimethicone, Retinol, Cetearyl Alcohol, Carbomer, Cetearyl Glucoside, Phenoxyethanol, Caprylyl Glycol, Tetrahydroxypropyl Ethylenediamine, Bisabolol, Glyceryl Stearate, Lauryl Lactate, Xanthan Gum, Aloe Barbadensis Leaf Extract, Resveratrol, Retinyl Palmitate, Simmondsia Chinensis (Jojoba) Seed Oil, Tocopheryl Acetate, Daucus Carota Sativa (Carrot) Root Extract, Sorbic Acid, Helianthus Annuus (Sunflower) Seed Oil, Ficus Carica (Fig) Fruit/Leaf Extract, Soy Phytosterols, Calendula Officinalis Flower Extract, Chamomilla Recutita (Matricaria) Flower Extract, Helichrysum Stoechas Extract, Lavandula Angustifolia (Lavender) Flower Extract, Sodium Hyaluronate, Sodium Benzoate, Camellia Sinensis Leaf Extract, Ferula Assa-Foetida Root Extract, Potassium Sorbate, Tocopherol, Palmitoyl Tripeptide-5',
    ph: '6.2 - 7.2',
  },
  7: {
    name: 'Hyaluronic Toner',
    description:
      'Hydrate, restore and nourish with this marine and Hyaluronic Acid-rich toner that boosts the effectiveness of your skin care regimen.',
    skinTypes: 'Mature · Dry/Sensitive · All Skin Types',
    howToUseClient: ['Apply toner to skin with cotton pad.'],
    professionalUse: [
      'After cleansing or masking, apply toner with cotton pad to remove residue from cleanser, makeup or hard water.',
    ],
    ingredients:
      'Aqua (Purified Water), Aloe Barbadensis Leaf Juice, Sodium Pca, Polyglyceryl-6 Ricinoleate, Polyglyceryl-3 Cocoate, Polyglyceryl-4 Caprate, Polyglyceryl-6 Caprylate, 1,2-Hexanediol, Hydroxyacetophenone, Caprylyl Glycol, Allantoin, Borago Officinalis Seed Extract, Fragrance, Sodium Hyaluronate, Butylene Glycol, Panthenol, Yeast Extract, Phenoxyethanol, Leuconostoc/Radish Root Ferment Filtrate, Caramel, Glucosyl Hesperidin, Saccharomyces/Copper Ferment, Honey, Phospholipids, Acetyl Octapeptide-3, Hyaluronic Acid, Sphingolipids, Dehydroacetic Acid, Chondrus Crispus Extract, Fucus Vesiculosus Extract, Palmaria Palmata Extract, Glycerin, Macrocystis Pyrifera (Kelp) Extract, Leuconostoc Ferment Filtrate, Linalool, Geraniol, Limonene.',
    ph: '5.0 - 6.0',
  },
  6: {
    name: 'Hexapeptide Moisture Crème',
    description:
      'Luxurious crème with Hexa and Tetrapeptides that help renew the look of skin. Moisture-rich Sodium Hyaluronate and Aloe Vera encourage glowing, hydrated skin.',
    skinTypes: 'Mature · Dry/Sensitive · Stressed Skin',
    howToUseClient: [
      'After cleansing and toning, warm a small amount between palms and smooth over face and neck.',
    ],
    professionalUse: [
      'As a finishing product for clients with mature to dry skin. Apply and massage gently.',
    ],
    ingredients:
      'Aloe Barbadensis Leaf Juice, Helianthus Annuus (Sunflower) Seed Oil, Caprylic/ Capric Triglyceride, Glycerin, Aqua (Purified Water), Butyrospermum Parkii (Shea) Butter, Glyceryl Stearate, Stearyl Alcohol, Euphorbia Cerifera (Candelilla) Wax, Arachidyl Alcohol, Persea Gratissima (Avocado) Oil, Behenyl Alcohol, Cetyl Alcohol, Arachidyl Glucoside, 1,2-Hexanediol, Caprylyl Glycol, Sodium Citrate, Xanthan Gum, Tocopheryl Acetate, Fragrance, Tetrasodium Glutamate Diacetate, Tropolone, Sodium Hyaluronate, Beta-Carotene, Acetyl Hexapeptide-8, Daucus Carota Sativa (Carrot) Root Extract, Palmitoyl Tripeptide-5, Tocopherol.',
    ph: '6.0 - 7.0',
  },
  1: {
    name: 'AHA Hand Crème',
    description:
      'Revitalize dry hands with this rich hand crème. Multi-source fruit acids gently exfoliate distressed skin leaving hands smooth and soft as the rich formula melts in.',
    howToUseClient: ['Apply to hands and massage until fully absorbed.'],
    professionalUse: [
      'May be used as part of any hand treatment; apply on hands and place in warm mitts.',
    ],
    ingredients:
      'Aqua (Purified Water), Helianthus Annuus (Sunflower) Seed Oil, Stearic Acid, Glycerin, Cetyl Alcohol, Glyceryl Stearate, Persea Gratissima (Avocado) Fruit Oil, Tetrahydroxypropyl Ethylenediamine, Cyclohexasiloxane, Phenoxyethanol, Caprylyl Glycol, Polyglyceryl-3 Stearate, Allantoin, Citrus Limon (Lemon) Peel Oil, Fragrance, Panthenol, Tocopheryl Acetate, Dimethicone, Vaccinium Myrtillus Fruit/Leaf Extract, Ferula Assa-Foetida Root Extract, Zinc Oxide, Saccharum Officinarum (Sugarcane) Extract, Sorbic Acid, Rosa Canina Fruit Oil, Daucus Carota Sativa (Carrot) Root Extract, Glycyrrhiza Glabra (Licorice) Root Extract, Citrus Aurantium Dulcis (Orange) Fruit Extract, Citrus Limon (Lemon) Fruit Extract, Aloe Barbadensis Leaf Extract, Calendula Officinalis Flower Extract, Chamomilla Recutita (Matricaria) Flower Extract, Acer Saccharum (Sugar Maple) Extract, Tocopherol, Citral, Eugenol, Limonene.',
    ph: '7.2 - 7.7',
  },
  3: {
    name: 'Cascading AOX+ Enviro Serum',
    description:
      'Peptide enriched antioxidant serum fortified with Ameliox™ Complex to protect against environmental aggression while enhancing natural radiance.',
    skinTypes: 'Mature · Hyperpigmented · All Skin Types',
    howToUseClient: [
      'AM and PM. Apply 2 to 3 drops of serum to face and décolleté following thorough cleansing of the skin. Allow to absorb.',
    ],
    professionalUse: [
      'May be used as a booster treatment under masks during anti-aging treatments, particularly for pigmented skin.',
      'May be used with galvanic current.',
    ],
    ingredients:
      'Aqua (Purified Water), Alcohol, Propanediol, Glycerin, Polysorbate 20, Sodium Ascorbyl Phosphate, Panthenol, Hydroxyethylcellulose, 1,2-Hexanediol, Caprylyl Glycol, Polyglyceryl-6 Caprylate, Polyglyceryl-4 Caprate, Polyglyceryl-6 Ricinoleate, Polyglyceryl-3 Cocoate, Tocopheryl Acetate, Ferulic Acid, Phospholipids, Sodium Hyaluronate, Terminalia Ferdinandiana Fruit Extract, Emblica Officinalis Fruit Extract, Carnosine, Caramel, Tropolone, Tocopherol, Phloretin, Astaxanthin, Silybum Marianum Extract, Palmitoyl Tripeptide-1.',
    ph: '7.5 - 8.5',
  },
  11: {
    name: 'Ferulic-C 20 Serum',
    description:
      'Nourishing serum formulated to boost skin tone and texture while offering excellent moisturizing and environmental protection against dry skin. Ferulic Acid fortifies the skin and enhances the conditioning benefits of Vitamin C.',
    skinTypes: 'Stressed · Mature · Dry/Sensitive Skin',
    howToUseClient: [
      'AM and PM, apply 2 to 3 drops of serum to face and décolleté following thorough cleansing of the skin. Allow to absorb.',
    ],
    professionalUse: [
      'After cleansing and toning, apply a small amount to face, neck and décolleté. Follow with appropriate moisturizer or treatment.',
    ],
    ingredients:
      'Aqua (Purified Water), Alcohol Denat., Cyclopentasiloxane, Dimethicone, Glycerin, Polyacrylamide, Caprylyl Glycol, 1,2-Hexanediol, C13-14 Isoparaffin, Ferulic Acid, Laureth-7, Ascorbyl Palmitate, Isopropyl Palmitate, Magnesium Ascorbyl Phosphate, Potassium Sorbate, Salicylic Acid, Ferula Assa-Foetida Root Extract, Glycyrrhiza Glabra (Licorice) Root Extract, Camellia Sinensis Leaf Extract, Sodium Hyaluronate, Yeast Extract, Glycine Soja (Soybean) Sterols, Simmondsia Chinensis (Jojoba) Seed Oil.',
    ph: '3.5 - 4.5',
  },

};

// Generate a product list using all images, filling in with sample data if needed
const products: Product[] = allProductImages.map((img, i) => {
  const base = {
    id: i + 1,
    name: featuredProducts[i]?.name || `Product ${i + 1}`,
    image: img,
    description: featuredProducts[i]?.description || 'A wonderful product coming soon.',
    price: featuredProducts[i]?.price || '',
  };
  return { ...base, ...extraDetails[i + 1] } as Product;
});

const Section = styled.section`
  position: relative;
  width: 90%;
  max-width: 1200px;
  margin: 3rem auto 2rem auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const Products: React.FC = () => {
  const [selected, setSelected] = useState<Product | null>(null);
  return (
    <>
      <img
        src={logo}
        alt="KK Beauty Lab logo"
        style={{ width: '80px', margin: '2rem auto', display: 'block' }}
      />
      <HeroTextSection title="Shop our Products">
        <p>Your story starts here. Choose your scene.</p>
        <p>
          Every product in our collection is designed to unleash your most confident self. From
          breakthrough serums that transform your skin to bold statements that turn heads—
        </p>
        <p>
          Skincare that performs. Makeup that commands attention. Self-care that celebrates you.
        </p>
        <p>Discover your next obsession below.</p>
      </HeroTextSection>
      <Section>
        <h2
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '2rem',
            marginBottom: '1.5rem',
            color: '#fff',
          }}
        >
          Our Products
        </h2>
        <Grid>
          {products.map((p) => (
            <div key={p.id} onClick={() => setSelected(p)} style={{ cursor: 'pointer' }}>
              <ProductCard image={p.image} name={p.name} price={p.price} />
            </div>
          ))}
        </Grid>
        {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
      </Section>
      <HeroTextSection
        title="Ready to treat yourself?"
        subtitle="Enjoy fast shipping and exclusive offers."
      >
        <span
          style={{
            maxWidth: '700px',
            fontSize: '1.1rem',
            lineHeight: '1.7',
            margin: '0 auto',
            color: '#eee',
          }}
        >
          Don’t wait—add your favorites to your cart and experience the KK Beauty Lab difference.
          Your next beauty obsession is just a click away!
        </span>
      </HeroTextSection>
    </>
  );
};

export default Products;
