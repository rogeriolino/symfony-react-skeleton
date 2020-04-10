<?php

namespace App\Serializer;

class CircularReferenceHandler
{
    public function __invoke($object, $format, $context)
    {
        return (string) $object;
    }
}