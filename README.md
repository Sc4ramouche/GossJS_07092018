# Testing

### Testing server API

[Assignment link](https://kodaktor.ru/07092018)

Accessing `there` API returns processed value. It works something like the following:

```
const process = x => (x + 2 * (x + 1)) ** 2 * 4 - 1;
```

As it turns out when we access `andba` API with negative input values for `there` we get calculation fault.