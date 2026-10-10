import type { WallpaperMode } from "@/types/config";
import type { SidebarPage } from "@/types/sidebarConfig";

export type BannerViewport = "desktop" | "mobile";
export type BannerContentLayout = "banner" | "compact";

export type BannerCopyMode = "home" | "context" | null;

export interface BannerStateInput {
	mode: WallpaperMode;
	page: SidebarPage | undefined;
	viewport: BannerViewport;
	imageCount: number;
	carouselEnabled: boolean;
	reducedMotion: boolean;
}

export interface BannerState {
	visible: boolean;
	assetGroup: BannerViewport | null;
	copyMode: BannerCopyMode;
	rotate: boolean;
	transparentTopAppBar: boolean;
	contentLayout: BannerContentLayout;
}

export function resolveBannerState(input: BannerStateInput): BannerState {
	const isHome = input.page === "home";
	const isFullscreen = input.mode === "fullscreen";
	const modeAllowsVisible = input.mode === "banner" || isFullscreen;
	// fullscreen 模式下所有页面均显示（非首页由 CSS 控制高度/模糊，classic 移动端隐藏）
	const visible =
		modeAllowsVisible &&
		input.imageCount > 0 &&
		(isFullscreen || input.viewport === "desktop" || isHome);

	const copyMode: BannerCopyMode = !visible
		? null
		: isHome
			? "home"
			: "context";

	return {
		visible,
		assetGroup: visible ? input.viewport : null,
		copyMode,
		rotate:
			visible &&
			input.carouselEnabled &&
			input.imageCount > 1 &&
			!input.reducedMotion,
		transparentTopAppBar: visible,
		contentLayout: visible ? "banner" : "compact",
	};
}
