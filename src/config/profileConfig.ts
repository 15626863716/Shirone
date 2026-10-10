import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "/assets/images/avatar.gif", // public 路径保留原图，GIF 动图原生播放
	name: "白百合",
	bio: "如白百合般素净生长，向着光，也成为光。",
	links: [
		{
			name: "QQ",
			icon: "fa7-brands:qq",
			url: "https://qm.qq.com",
		},
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/15626863716",
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:15626863716@163.com",
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss.xml",
		},
	],
});
