// https://github.com/greenheartgames/greenworks/blob/master/docs/cloud.md

declare type cloudQuotaSuccessCallback = (total_bytes: number, available_bytes: number) => void;


declare function getCloudQuota(success_callback: cloudQuotaSuccessCallback): Promise<void>;


