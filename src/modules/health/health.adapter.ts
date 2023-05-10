export abstract class IHealthService {
  abstract getText(): Promise<string>;
  abstract getError(): Promise<unknown>;
}
