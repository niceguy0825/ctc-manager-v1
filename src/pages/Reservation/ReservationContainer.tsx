import React, { useEffect, useState } from "react";
import ReservationPresenter from "./ReservationPresenter";
import { Reservation } from "../../model/reservation";
import { notification } from "antd";
import { reservation } from "../../apis";

export default () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getReservation();
  }, []);

  const getReservation = async () => {
    try {
      const response = await reservation(); // reservation 함수 호출

      console.log("Fetched reservations: : ", response);
      setReservations(response.data); // 가져온 데이터를 상태에 설정
      setLoading(false); // 로딩 상태 종료
    } catch (error) {
      notification.error({
        message: "오류 발생",
        description: "데이터를 가져오지 못했습니다.",
      });
      setLoading(false); // 로딩 상태 종료
    }
  };

  return (
    <ReservationPresenter
      reservation={reservations}
      loading={isLoading}
    />
  );
};
