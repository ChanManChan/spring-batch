package com.u4.springbatch.practice_three;

import com.u4.springbatch.practice_three.services.EventHandler;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@RestController
@RequestMapping(path = "/events")
public class ServerSentEventController {

    private static final Logger LOGGER = LogManager.getLogger(ServerSentEventController.class);

    private final EventHandler eventHandler;

    public ServerSentEventController(EventHandler eventHandler) {
        this.eventHandler = eventHandler;
    }

    @GetMapping("/ping")
    public void emit() {
        eventHandler.pingAllClients();
    }

    @GetMapping("/register-client")
    public SseEmitter sseEmitter() {
        return eventHandler.registerClient();
    }
}