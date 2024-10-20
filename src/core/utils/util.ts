import Jwt, { Secret } from "jsonwebtoken";
import config from "../../config";
import { Token } from "../types";
import HttpResponse, { httpMessages } from "../enums/httpResponse";

export const decodeToken = (token: string): Token => {
  return Jwt.verify(token, config.JWT_SECRET as Secret) as Token;
};

// export const formatResponseObject = (
//   httpCode: HttpResponse,
//   resultPayload: object,
// ): object => {
//   const status: Array<HttpResponse> = httpMessages[httpCode] || [
//     `${httpCode}`,
//     `Unknown statusCode ${httpCode}`,
//   ];
//   const response: object = Object.assign(
//     {
//       statusCode: httpCode,
//       statusMessage: status[HttpResponse.STATUSMESSAGE],
//       statusDescription: status[HttpResponse.STATUSDESCRIPTION],
//       result: {},
//     },
//     resultPayload || {},
//   );
//   return response;
// };

export default {
  decodeToken,
};
