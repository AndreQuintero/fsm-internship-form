"use client"
import { useEffect, useState } from "react";

export enum DeviceTypeEnum {
  MOBILE = "MOBILE",
  DESKTOP = "DESKTOP"
}

const MOBILE_MAX_WIDTH = 768;

export function useDeviceType(): DeviceTypeEnum {
  const getDeviceType = (): DeviceTypeEnum => {
    if (typeof window === "undefined") return DeviceTypeEnum.DESKTOP;
    return window.innerWidth <= MOBILE_MAX_WIDTH ? DeviceTypeEnum.MOBILE : DeviceTypeEnum.DESKTOP;
  };

  const [deviceType, setDeviceType] = useState<DeviceTypeEnum>(getDeviceType());

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
}