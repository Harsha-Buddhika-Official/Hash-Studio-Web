import { buildWhatsAppLink } from "./siteConfig";

export const portfolioFilters = [
  "All",
  "Logo",
  "Social Media",
  "Packaging",
  "Flyer",
  "T shirt"
];

export const portfolioIntro = {
  heading: "Selected Works.",
  description:
    "A collection of premium visual identities, digital experiences, and strategic packaging designs crafted for forward-thinking brands.",
};

export const categoryColors = {
  "Logo": "text-brand-500",
  "Social Media": "text-white",
  "Packaging": "text-chip-orange-fg",
  "Flyer": "text-green-500",
  "T shirt": "text-red-500",
};

const rawProjects = [
  {
    title: "Tution Class",
    categories: ["Social Media"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784366241/Post_9_hhumqr.jpg",
  },
  {
    title: "Tution Class",
    categories: ["Social Media"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784366242/Post_8_jlavaj.jpg",
  },
  {
    title: "Tution Class",
    categories: ["Social Media"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784366178/Post_1_dn9db2.jpg",
  },
  {
    title: "Tution Class",
    categories: ["Social Media"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784366177/Post_2_nh79pj.jpg",
  },
  {
    title: "Logo Design",
    categories: ["Logo"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784370169/Gemini_Generated_Image_ifdxtcifdxtcifdx_pvilkr.png",
  },
  {
    title: "Flyer Design",
    categories: ["Flyer"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784373001/Gemini_Generated_Image_3vum5g3vum5g3vum_w1i53h.png",
  },
  {
    title: "Packaging Design",
    categories: ["Packaging"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784366199/labels_2_aqdujp.jpg",
  },
  {
    title: "Logo Design",
    categories: ["Logo"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784370950/Gemini_Generated_Image_bynf74bynf74bynf_t7ltdb.png",
  },
  {
    title: "Tution Class",
    categories: ["Social Media"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784366187/Post_5_au61tv.jpg",
  },
  {
    title: "Flyer Design",
    categories: ["Flyer"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784372992/Gemini_Generated_Image_dpeh85dpeh85dpeh_eamplo.png",
  },
  {
    title: "Logo Design",
    categories: ["Logo"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784370944/Gemini_Generated_Image_njylbjnjylbjnjyl_kogdmf.png",
  },
  {
    title: "Packaging Design",
    categories: ["Packaging"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784366178/labels_1_ejyssn.jpg",
  },
  {
    title: "T shirt Design",
    categories: ["T shirt"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784366182/t_shart_x6sw3j.jpg",
  },
  {
    title: "Logo Design",
    categories: ["Logo"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784370934/Gemini_Generated_Image_fvw4i6fvw4i6fvw4_nl3bdm.png",
  },
  {
    title: "Tution Class",
    categories: ["Social Media"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784366182/Post_3_azmg0p.jpg",
  },
  {
    title: "Flyer Design",
    categories: ["Flyer"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784372987/Gemini_Generated_Image_ij5g3yij5g3yij5g_me8bhs.png",
  },
  {
    title: "Logo Design",
    categories: ["Logo"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784370932/Gemini_Generated_Image_vqf5jfvqf5jfvqf5_rkucrp.png",
  },
  {
    title: "Packaging Design",
    categories: ["Packaging"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784366178/labels_3_ply9fs.jpg",
  },
  {
    title: "Tution Class",
    categories: ["Social Media"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784366194/Post_6_doirce.jpg",
  },
  {
    title: "Logo Design",
    categories: ["Logo"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784370159/Gemini_Generated_Image_ull8p3ull8p3ull8_mtgbcd.png",
  },
  {
    title: "Flyer Design",
    categories: ["Flyer"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784366208/flyer_5_u2wsjp.jpg",
  },
  {
    title: "Logo Design",
    categories: ["Logo"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784370156/Gemini_Generated_Image_8h6xb48h6xb48h6x_w5kh0r.png",
  },
  {
    title: "Tution Class",
    categories: ["Social Media"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784366198/Post_4_cumlfa.jpg",
  },
  {
    title: "Flyer Design",
    categories: ["Flyer"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784366180/flyer_1_pb8nzl.jpg",
  },
  {
    title: "Logo Design",
    categories: ["Logo"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784370156/Gemini_Generated_Image_9ca5qd9ca5qd9ca5_pqbpfm.png",
  },
  {
    title: "Logo Design",
    categories: ["Logo"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784370148/Gemini_Generated_Image_xf9r47xf9r47xf9r_xteanv.png",
  },
  {
    title: "Logo Design",
    categories: ["Logo"],
    image: "https://res.cloudinary.com/s6n4v4vu/image/upload/v1784432767/Gemini_Generated_Image_1g826p1g826p1g82_edqr16.png",
  },
];

export const portfolioProjects = rawProjects
  .map((project, index) => ({
    id: `project-${index + 1}`,
    ...project,
  }))
  .reverse();

export const portfolioCta = {
  heading: "Ready to start your project?",
  cta: { label: "Let's Work Together", href: buildWhatsAppLink() },
};