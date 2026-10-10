import type { AnnouncementConfig } from "@/types/announcementConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 公告栏配置
 * 组件显示由 sidebarConfig 统一控制
 */
export const announcementConfig: AnnouncementConfig = withUserConfig(
	"announcement",
	{
		title: "", // 公告标题，填空使用 i18n 字符串 Key.announcement
		content: "人生是旷野，不是轨道。这里记录我走过的路、想过的事，欢迎常来坐坐。", // 公告内容
		closable: true, // 允许用户关闭公告
		link: {
			enable: true, // 启用链接
			text: "GitHub", // 链接文本
			url: "https://github.com/15626863716/Shirone", // 链接 URL
			external: true, // 外部链接
		},
	},
);
