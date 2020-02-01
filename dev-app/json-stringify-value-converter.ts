export class JsonStringifyValueConverter {
  toView(value) {
    return JSON.stringify(value);
  }
}
