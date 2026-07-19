import BrandingWatermarkOutlinedIcon from "@mui/icons-material/BrandingWatermarkOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ViewCarouselOutlinedIcon from "@mui/icons-material/ViewCarouselOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import PhotoSizeSelectLargeOutlinedIcon from "@mui/icons-material/PhotoSizeSelectLargeOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";

/**
 * Single icon registry for every service, keyed by the `icon` field in
 * data/services.js. Used by both ExpertiseCard (Home) and ServiceCard
 * (Services page) so an icon only ever needs to change in one place.
 */
export const SERVICE_ICONS = {
  logo: BrandingWatermarkOutlinedIcon,
  identity: PaletteOutlinedIcon,
  social: DynamicFeedOutlinedIcon,
  poster: CampaignOutlinedIcon,
  flyer: DescriptionOutlinedIcon,
  banner: ViewCarouselOutlinedIcon,
  packaging: Inventory2OutlinedIcon,
  label: SellOutlinedIcon,
  card: BadgeOutlinedIcon,
  menu: RestaurantMenuOutlinedIcon,
  billboard: PhotoSizeSelectLargeOutlinedIcon,
  uiux: DevicesOutlinedIcon,
  vehicle: DirectionsCarFilledOutlinedIcon,
};